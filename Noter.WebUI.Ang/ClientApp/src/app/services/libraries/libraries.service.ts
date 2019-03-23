import { Injectable, EventEmitter } from '@angular/core';
import uuid1 from 'uuid/v1';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';


import { Observable, throwError, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';


import { Library, CreateLibraryCommand, createLibraryResponse } from './library.models';

//const httpOptions = {
//  headers: new HttpHeaders({
//    'Content-Type': 'application/json'
//    //'Authorization': 'my-auth-token'
//  })
//}

@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  public libraryAdded$: EventEmitter<number> = new EventEmitter();

  //todo move this to the config service
  librariesUrl = 'http://localhost:63315/api/libraries';  // URL to web api


  constructor(private http: HttpClient)
  {
  }

  getLibraries(): Observable<Library[]> {

    //todo replace <any> with definition from controller
    return this.http.get<Library[]>(this.librariesUrl)
      .pipe(
        map<any, Library[]>(d => d.libraries),
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

    return this.http.post<createLibraryResponse>(this.librariesUrl, request,)
      .pipe(
        // todo add throttling etc
        retry(3),
        tap(item => this.libraryAdded$.emit(item.LibraryId))
        // this.libraryAdded$.emit(item);
      );
  }
}
