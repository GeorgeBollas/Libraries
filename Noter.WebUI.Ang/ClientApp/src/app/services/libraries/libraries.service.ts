import { Injectable } from '@angular/core';
import uuid1 from 'uuid/v1';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Library} from './library.models';

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

  //todo move this to the config service
  librariesUrl = 'http://localhost:63315/api/libraries';  // URL to web api


  constructor(private http: HttpClient) { }

  getLibraries(): Observable<Library[]> {

    //todo replace any with definition from controller
    return this.http.get<any>(this.librariesUrl)
      .pipe(map<any, Library[]>(d => d.libraries));
  }

  createLibrary(name: string, description: string) {

    return this.http.post<any>(this.librariesUrl,
      {
        requestGuid: uuid1(),
        name:name,
        notes: description,
        tags: []
      });
  }


  //private handleError(error: HttpErrorResponse) {
  //  if (error.error instanceof ErrorEvent) {

  //    // A client-side or network error occurred. Handle it accordingly.
  //    console.error('An error occurred:', error.error.message);

  //  } else {

  //    // The backend returned an unsuccessful response code.
  //    // The response body may contain clues as to what went wrong,
  //    console.error(
  //      `Backend returned code ${error.status}, ` +
  //      `body was: ${error.error}`);

  //  }

  //  // return an observable with a user-facing error message
  //  return throwError(
  //    'Something bad happened; please try again later.');
  //};
}
