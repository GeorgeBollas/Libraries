import uuid1 from 'uuid/v1';

export class Library {
  id: number;
  name: string;
  description: string;
  isActive:boolean;
}


// create command

export interface CreateLibraryCommand {
  RequestGuid: uuid1;
  Name: string;
  Notes: string;
  Tags: string[];
}


export interface createLibraryResponse {
  LibraryId: number;
}

