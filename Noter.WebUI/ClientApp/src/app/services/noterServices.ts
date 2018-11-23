/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v11.20.1.0 (NJsonSchema v9.11.0.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken  } from '@angular/core';
import { Http, Headers, ResponseContentType, Response } from '@angular/http';

export const API_BASE_URL = new InjectionToken('API_BASE_URL'); //todo: is this the correct replacement for OpaqueToken

@Injectable()
export class NotesClient {
    private http: Http;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(Http) http: Http, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    searchNotes(partTitle: string | null | undefined): Observable<NoteListViewModel[] | null> {
        let url_ = this.baseUrl + "/api/Notes/SearchNotes?";
        if (partTitle !== undefined)
            url_ += "PartTitle=" + encodeURIComponent("" + partTitle) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            method: "get",
            headers: new Headers({
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSearchNotes(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processSearchNotes(<any>response_);
                } catch (e) {
                    return <Observable<NoteListViewModel[] | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<NoteListViewModel[] | null>><any>_observableThrow(response_);
        }));
    }

    protected processSearchNotes(response: Response): Observable<NoteListViewModel[] | null> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200) {
            const _responseText = response.text();
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (resultData200 && resultData200.constructor === Array) {
                result200 = [];
                for (let item of resultData200)
                    result200.push(NoteListViewModel.fromJS(item));
            }
            return _observableOf(result200);
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.text();
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return _observableOf<NoteListViewModel[] | null>(<any>null);
    }

    create(command: CreateNoteCommand): Observable<FileResponse | null> {
        let url_ = this.baseUrl + "/api/Notes/Create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(command);

        let options_ : any = {
            body: content_,
            method: "post",
            responseType: ResponseContentType.Blob,
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: Response): Observable<FileResponse | null> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>response.blob(), status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(response.blob()).pipe(_observableMergeMap(_responseText => {
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

        let options_ : any = {
            body: content_,
            method: "put",
            responseType: ResponseContentType.Blob,
            headers: new Headers({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: Response): Observable<FileResponse | null> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>response.blob(), status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(response.blob()).pipe(_observableMergeMap(_responseText => {
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

        let options_ : any = {
            method: "delete",
            responseType: ResponseContentType.Blob,
            headers: new Headers({
                "Accept": "application/json"
            })
        };

        return this.http.request(url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof Response) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<FileResponse | null>><any>_observableThrow(e);
                }
            } else
                return <Observable<FileResponse | null>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: Response): Observable<FileResponse | null> {
        const status = response.status;

        let _headers: any = response.headers ? response.headers.toJSON() : {};
        if (status === 200 || status === 206) {
            const contentDisposition = response.headers ? response.headers.get("content-disposition") : undefined;
            const fileNameMatch = contentDisposition ? /filename="?([^"]*?)"?(;|$)/g.exec(contentDisposition) : undefined;
            const fileName = fileNameMatch && fileNameMatch.length > 1 ? fileNameMatch[1] : undefined;
            return _observableOf({ fileName: fileName, data: <any>response.blob(), status: status, headers: _headers });
        } else if (status !== 200 && status !== 204) {
            return blobToText(response.blob()).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<FileResponse | null>(<any>null);
    }
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
    if(result !== null && result !== undefined)
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
            reader.onload = function() { 
                observer.next(this.result);
                observer.complete();
            }
            reader.readAsText(blob); 
        }
    });
}
