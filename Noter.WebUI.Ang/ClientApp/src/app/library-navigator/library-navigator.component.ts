import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, fadeInContent } from '@angular/material';

import { Observable, of } from 'rxjs';

import { Library } from '../services/libraries/library.models';

import { LibrariesService } from '../services/libraries/libraries.service'
import { CreateLibraryDetailsComponent } from '../create-library-details/create-library-details.component';
import { filter, tap, map } from 'rxjs/operators';

export interface CreateLibraryDialogData {
  name: string;
  description: string;
}


class LibraryViewModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public active: boolean
  ) { }
}

@Component({
  selector: 'app-library-navigator',
  templateUrl: './library-navigator.component.html',
  styleUrls: ['./library-navigator.component.css']
})
export class LibraryNavigatorComponent implements OnInit {

  @Input('isCollapsed') isCollapsed: boolean;


  libraries: Observable<Library[]>;

  includeInactive: boolean = false;

  filterText: string = "";

  constructor(
    private librariesService: LibrariesService,
    public dialog: MatDialog
  ) {
    //todo ensure filter is kept when we do a refresh due to change in libraries
    //librariesService.libraryAdded$.subscribe(id => this.getLibraries()); // or add to the top for now?? 
  }

  ngOnInit() {
    this.libraries = this.librariesService.Libraries;
  }

  get filteredLibraries() {

    return this.libraries.pipe(
      map(libs => libs.filter(l => l.name.includes(this.filterText.trim()) && this.includeInactive ? true : l.isActive == true))
    );
  }

  toggleShowInactive() {
    this.includeInactive = !this.includeInactive;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateLibraryDetailsComponent, {
      width: '750px',
      data: { name: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  edit(id: any) {
    console.log("edit " + id);
  }

  tags(id: any) {
    console.log("tags " + id);
  }
}
