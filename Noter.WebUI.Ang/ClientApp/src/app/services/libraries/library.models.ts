import uuid1 from 'uuid/v1';

export class Library {
  id: number;
  name: string;
  notes: string;
  isPinned: boolean;
  isActive:boolean;
}


// create command

export interface CreateLibraryCommand {
  RequestGuid: uuid1;
  Name: string;
  Notes: string;
}


export interface createLibraryResponse {
  LibraryId: number;
}

export interface GetLibraryListQuery {
  NamePart: string;
  PinnedFirst: boolean;
  IncludeInactive: boolean;
}
