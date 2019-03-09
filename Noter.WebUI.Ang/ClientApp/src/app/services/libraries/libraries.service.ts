import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { Library } from './library';

//export const Libraries: Library[] = [
//  { id: 1, name: 'Music', description: '', status: 1 },
//  { id: 2, name: 'Programming', description: '', status: 1 },
//  { id: 3, name: 'Science', description: '', status: 1 },
//  { id: 4, name: 'Movies', description: '', status: 0 },
//  { id: 5, name: 'Software', description: '', status: 1 },
//];


@Injectable({
  providedIn: 'root'
})
export class LibrariesService {

  //todo move this to the config service
  librariesUrl = 'http://localhost:63315/api/libraries';  // URL to web api


  constructor(private http: HttpClient) { }

  getLibraries(): Observable<Library[]> {
    return this.http.get<Library[]>(this.librariesUrl);
  }

}
