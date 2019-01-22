/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.5.0 (NJsonSchema v9.13.2.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken('API_BASE_URL');

export interface ILibrariesClient {
  getAll(): Observable<LibraryListViewModel | null>;
  create(command: CreateLibraryCommand): Observable<FileResponse | null>;
  get(id: number): Observable<FileResponse | null>;
  update(id: number, command: UpdateLibraryCommand): Observable<FileResponse | null>;
  delete(id: number): Observable<FileResponse | null>;
}

@Injectable()
export class LibrariesClient implements ILibrariesClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
  }

  getAll(): Observable<LibraryListViewModel | null> {
    let url_ = this.baseUrl + "/api/Libraries";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGetAll(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGetAll(<any>response_);
        } catch (e) {
          return <Observable<LibraryListViewModel | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<LibraryListViewModel | null>><any>_observableThrow(response_);
    }));
  }

  protected processGetAll(response: HttpResponseBase): Observable<LibraryListViewModel | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        result200 = resultData200 ? LibraryListViewModel.fromJS(resultData200) : <any>null;
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<LibraryListViewModel | null>(<any>null);
  }

  create(command: CreateLibraryCommand): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Libraries";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(command);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreate(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processCreate(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }

  get(id: number): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Libraries/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processGet(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processGet(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processGet(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }

  update(id: number, command: UpdateLibraryCommand): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Libraries/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(command);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdate(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processUpdate(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }

  delete(id: number): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Libraries/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processDelete(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processDelete(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processDelete(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }
}

export interface INotesClient {
  searchNotes(partTitle: string | null | undefined): Observable<NoteListViewModel[] | null>;
  create(command: CreateNoteCommand): Observable<FileResponse | null>;
  update(id: number, command: UpdateNoteCommand): Observable<FileResponse | null>;
  delete(id: number): Observable<FileResponse | null>;
}

@Injectable()
export class NotesClient implements INotesClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
  }

  searchNotes(partTitle: string | null | undefined): Observable<NoteListViewModel[] | null> {
    let url_ = this.baseUrl + "/api/Notes/SearchNotes?";
    if (partTitle !== undefined)
      url_ += "PartTitle=" + encodeURIComponent("" + partTitle) + "&";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processSearchNotes(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processSearchNotes(<any>response_);
        } catch (e) {
          return <Observable<NoteListViewModel[] | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<NoteListViewModel[] | null>><any>_observableThrow(response_);
    }));
  }

  protected processSearchNotes(response: HttpResponseBase): Observable<NoteListViewModel[] | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (resultData200 && resultData200.constructor === Array) {
          result200 = [];
          for (let item of resultData200)
            result200.push(NoteListViewModel.fromJS(item));
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<NoteListViewModel[] | null>(<any>null);
  }

  create(command: CreateNoteCommand): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Notes/Create";
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(command);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processCreate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processCreate(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processCreate(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }

  update(id: number, command: UpdateNoteCommand): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Notes/Update/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    const content_ = JSON.stringify(command);

    let options_: any = {
      body: content_,
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processUpdate(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processUpdate(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processUpdate(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }

  delete(id: number): Observable<FileResponse | null> {
    let url_ = this.baseUrl + "/api/Notes/Delete/{id}";
    if (id === undefined || id === null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id));
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processDelete(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processDelete(<any>response_);
        } catch (e) {
          return <Observable<FileResponse | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<FileResponse | null>><any>_observableThrow(response_);
    }));
  }

  protected processDelete(response: HttpResponseBase): Observable<FileResponse | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200 || status === 206) {
      const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
      const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
      const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
      return _observableOf({ fileName: fileName, data: <any>responseBlob, status: status, headers: _headers });
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<FileResponse | null>(<any>null);
  }
}

export interface ISampleDataClient {
  weatherForecasts(): Observable<WeatherForecast[] | null>;
}

@Injectable()
export class SampleDataClient implements ISampleDataClient {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : "";
  }

  weatherForecasts(): Observable<WeatherForecast[] | null> {
    let url_ = this.baseUrl + "/api/SampleData/WeatherForecasts";
    url_ = url_.replace(/[?&]$/, "");

    let options_: any = {
      observe: "response",
      responseType: "blob",
      headers: new HttpHeaders({
        "Accept": "application/json"
      })
    };

    return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
      return this.processWeatherForecasts(response_);
    })).pipe(_observableCatch((response_: any) => {
      if (response_ instanceof HttpResponseBase) {
        try {
          return this.processWeatherForecasts(<any>response_);
        } catch (e) {
          return <Observable<WeatherForecast[] | null>><any>_observableThrow(e);
        }
      } else
        return <Observable<WeatherForecast[] | null>><any>_observableThrow(response_);
    }));
  }

  protected processWeatherForecasts(response: HttpResponseBase): Observable<WeatherForecast[] | null> {
    const status = response.status;
    const responseBlob =
      response instanceof HttpResponse ? response.body :
        (<any>response).error instanceof Blob ? (<any>response).error : undefined;

    let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } };
    if (status === 200) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        let result200: any = null;
        let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
        if (resultData200 && resultData200.constructor === Array) {
          result200 = [];
          for (let item of resultData200)
            result200.push(WeatherForecast.fromJS(item));
        }
        return _observableOf(result200);
      }));
    } else if (status !== 200 && status !== 204) {
      return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
        return throwException("An unexpected server error occurred.", status, _responseText, _headers);
      }));
    }
    return _observableOf<WeatherForecast[] | null>(<any>null);
  }
}

export class LibraryListViewModel implements ILibraryListViewModel {
  libraries?: LibraryListDto[] | undefined;

  constructor(data?: ILibraryListViewModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      if (data["libraries"] && data["libraries"].constructor === Array) {
        this.libraries = [];
        for (let item of data["libraries"])
          this.libraries.push(LibraryListDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): LibraryListViewModel {
    data = typeof data === 'object' ? data : {};
    let result = new LibraryListViewModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (this.libraries && this.libraries.constructor === Array) {
      data["libraries"] = [];
      for (let item of this.libraries)
        data["libraries"].push(item.toJSON());
    }
    return data;
  }
}

export interface ILibraryListViewModel {
  libraries?: LibraryListDto[] | undefined;
}

export class LibraryListDto implements ILibraryListDto {
  libraryId!: number;
  name?: string | undefined;
  isActive!: boolean;

  constructor(data?: ILibraryListDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.libraryId = data["libraryId"];
      this.name = data["name"];
      this.isActive = data["isActive"];
    }
  }

  static fromJS(data: any): LibraryListDto {
    data = typeof data === 'object' ? data : {};
    let result = new LibraryListDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["libraryId"] = this.libraryId;
    data["name"] = this.name;
    data["isActive"] = this.isActive;
    return data;
  }
}

export interface ILibraryListDto {
  libraryId: number;
  name?: string | undefined;
  isActive: boolean;
}

export class CreateLibraryCommand implements ICreateLibraryCommand {
  name?: string | undefined;
  notes?: string | undefined;
  tags?: string[] | undefined;

  constructor(data?: ICreateLibraryCommand) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.name = data["name"];
      this.notes = data["notes"];
      if (data["tags"] && data["tags"].constructor === Array) {
        this.tags = [];
        for (let item of data["tags"])
          this.tags.push(item);
      }
    }
  }

  static fromJS(data: any): CreateLibraryCommand {
    data = typeof data === 'object' ? data : {};
    let result = new CreateLibraryCommand();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["notes"] = this.notes;
    if (this.tags && this.tags.constructor === Array) {
      data["tags"] = [];
      for (let item of this.tags)
        data["tags"].push(item);
    }
    return data;
  }
}

export interface ICreateLibraryCommand {
  name?: string | undefined;
  notes?: string | undefined;
  tags?: string[] | undefined;
}

export class UpdateLibraryCommand implements IUpdateLibraryCommand {
  libraryId!: number;
  name?: string | undefined;
  notes?: string | undefined;

  constructor(data?: IUpdateLibraryCommand) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.libraryId = data["libraryId"];
      this.name = data["name"];
      this.notes = data["notes"];
    }
  }

  static fromJS(data: any): UpdateLibraryCommand {
    data = typeof data === 'object' ? data : {};
    let result = new UpdateLibraryCommand();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["libraryId"] = this.libraryId;
    data["name"] = this.name;
    data["notes"] = this.notes;
    return data;
  }
}

export interface IUpdateLibraryCommand {
  libraryId: number;
  name?: string | undefined;
  notes?: string | undefined;
}

export class NoteListViewModel implements INoteListViewModel {
  notes?: NoteModel[] | undefined;

  constructor(data?: INoteListViewModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      if (data["notes"] && data["notes"].constructor === Array) {
        this.notes = [];
        for (let item of data["notes"])
          this.notes.push(NoteModel.fromJS(item));
      }
    }
  }

  static fromJS(data: any): NoteListViewModel {
    data = typeof data === 'object' ? data : {};
    let result = new NoteListViewModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (this.notes && this.notes.constructor === Array) {
      data["notes"] = [];
      for (let item of this.notes)
        data["notes"].push(item.toJSON());
    }
    return data;
  }
}

export interface INoteListViewModel {
  notes?: NoteModel[] | undefined;
}

export class NoteModel implements INoteModel {
  id!: number;
  guid!: string;
  title?: string | undefined;
  notesSummary?: string | undefined;

  constructor(data?: INoteModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.id = data["id"];
      this.guid = data["guid"];
      this.title = data["title"];
      this.notesSummary = data["notesSummary"];
    }
  }

  static fromJS(data: any): NoteModel {
    data = typeof data === 'object' ? data : {};
    let result = new NoteModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["guid"] = this.guid;
    data["title"] = this.title;
    data["notesSummary"] = this.notesSummary;
    return data;
  }
}

export interface INoteModel {
  id: number;
  guid: string;
  title?: string | undefined;
  notesSummary?: string | undefined;
}

export class CreateNoteCommand implements ICreateNoteCommand {
  title?: string | undefined;
  notes?: string | undefined;

  constructor(data?: ICreateNoteCommand) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.title = data["title"];
      this.notes = data["notes"];
    }
  }

  static fromJS(data: any): CreateNoteCommand {
    data = typeof data === 'object' ? data : {};
    let result = new CreateNoteCommand();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["title"] = this.title;
    data["notes"] = this.notes;
    return data;
  }
}

export interface ICreateNoteCommand {
  title?: string | undefined;
  notes?: string | undefined;
}

export class UpdateNoteCommand implements IUpdateNoteCommand {
  id!: number;
  title?: string | undefined;
  notes?: string | undefined;

  constructor(data?: IUpdateNoteCommand) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.id = data["id"];
      this.title = data["title"];
      this.notes = data["notes"];
    }
  }

  static fromJS(data: any): UpdateNoteCommand {
    data = typeof data === 'object' ? data : {};
    let result = new UpdateNoteCommand();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["title"] = this.title;
    data["notes"] = this.notes;
    return data;
  }
}

export interface IUpdateNoteCommand {
  id: number;
  title?: string | undefined;
  notes?: string | undefined;
}

export class WeatherForecast implements IWeatherForecast {
  dateFormatted?: string | undefined;
  temperatureC!: number;
  summary?: string | undefined;
  temperatureF!: number;

  constructor(data?: IWeatherForecast) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.dateFormatted = data["dateFormatted"];
      this.temperatureC = data["temperatureC"];
      this.summary = data["summary"];
      this.temperatureF = data["temperatureF"];
    }
  }

  static fromJS(data: any): WeatherForecast {
    data = typeof data === 'object' ? data : {};
    let result = new WeatherForecast();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["dateFormatted"] = this.dateFormatted;
    data["temperatureC"] = this.temperatureC;
    data["summary"] = this.summary;
    data["temperatureF"] = this.temperatureF;
    return data;
  }
}

export interface IWeatherForecast {
  dateFormatted?: string | undefined;
  temperatureC: number;
  summary?: string | undefined;
  temperatureF: number;
}

export interface FileResponse {
  data: Blob;
  status: number;
  fileName?: string;
  headers?: { [name: string]: any };
}

export class SwaggerException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is SwaggerException {
    return obj.isSwaggerException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
  if (result !== null && result !== undefined)
    return _observableThrow(result);
  else
    return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next("");
      observer.complete();
    } else {
      let reader = new FileReader();
      reader.onload = event => {
        observer.next((<any>event.target).result);
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}