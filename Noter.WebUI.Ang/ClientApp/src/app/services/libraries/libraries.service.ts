import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Library } from './library';

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
      .pipe(map<any,Library[]>(d => d.libraries));

  }

}
