import { Injectable, EventEmitter } from '@angular/core';
import uuid1 from 'uuid/v1';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';


import { Observable, throwError, of, timer } from 'rxjs';
import { catchError, map, retry, tap, shareReplay, switchMap } from 'rxjs/operators';


import { Library, CreateLibraryCommand, createLibraryResponse } from './library.models';

//const httpOptions = {
//  headers: new HttpHeaders({
//    'Content-Type': 'application/json'
//    //'Authorization': 'my-auth-token'
//  })
//}

const librariesUrl = 'http://localhost:63315/api/libraries';  // URL to web api
const CACHE_SIZE = 1;
const REFRESH_INTERVAL = 2000;

@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  private cache$: Observable<Array<Library>>;

  public libraryAdded$: EventEmitter<number> = new EventEmitter();

  //todo move this to the config service
  constructor(private http: HttpClient) {
  }


  // shareReplay = This is called multicasting and defines the foundation for our simple cache
  get Libraries() {

    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      // For each tick make an http request to fetch new data
      this.cache$ = timer$.pipe(
        switchMap(_ => this.getLibraries()),
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;

  }

  private getLibraries(): Observable<Library[]> {

    return this.http.get<Library[]>(librariesUrl)
      .pipe(
        map<any, Library[]>(respnse => respnse.libraries),
        catchError(err => []) //todo: dont do this here?? this makes it silent
      );
  }

  createLibrary(name: string, description: string) {

    const request = <CreateLibraryCommand>{
      RequestGuid: uuid1(),
      Name: name,
      Notes: description,
      Tags: []
    };

    return this.http.post<createLibraryResponse>(librariesUrl, request, )
      .pipe(
        retry(3),
        tap(item => this.libraryAdded$.emit(item.LibraryId))
      );
  }
}
