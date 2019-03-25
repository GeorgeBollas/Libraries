import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, fadeInContent } from '@angular/material';

import { Observable, of } from 'rxjs';

import { Library } from '../services/libraries/library.models';

import { LibrariesService } from '../services/libraries/libraries.service'
import { CreateLibraryDetailsComponent } from '../create-library-details/create-library-details.component';
import { filter, tap } from 'rxjs/operators';

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

  filteredLibraries: Observable<Library[]>;

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
    //this.getLibraries();

    this.libraries = this.librariesService.Libraries; //todo filter somehow
      //.pipe(
      //  tap(l => this.filteredLibraries = of(l.filter(l => l.name.includes(this.filterText.trim()) && this.includeInactive ? true : l.isActive == true)))
      //);
      // todo create a custom filter to filter out only active if so selected
    
    //todo apply filter if any

  }

  //private getLibraries() {
  //  this.librariesService.getLibraries()
  //    .subscribe(data =>
  //    {
  //      this.libraries = data;
  //      this.filterLibraries();
  //    });
  //}

  //filterLibraries() {
  //  this.filterText = this.filterText.trim();
  //  this.filteredLibraries = this.libraries
  //    .filter((lib: Library) => lib.name.includes(this.filterText) && this.includeInactive ? true : lib.isActive == true) //todo is this the best way
  //}

  toggleShowInactive() {
    this.includeInactive = !this.includeInactive;
    //this.filterLibraries(); //todo do we need to do this any more?????????????????? 
    console.log(this.includeInactive);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateLibraryDetailsComponent, {
      width: '750px',
      data: { name: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.getLibraries(); should now be done using an event
      // in fact should not need this at all (afterClosed that is)
    });
  }


  edit(id: any) {
    console.log("edit " + id);
  }

  tags(id: any) {
    console.log("tags " + id);
  }
}
