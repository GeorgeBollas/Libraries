import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Observable } from 'rxjs';

import { Library } from '../services/libraries/library.models';

import { LibrariesService } from '../services/libraries/libraries.service'
import { CreateLibraryDetailsComponent } from '../create-library-details/create-library-details.component';

export interface CreateLibraryDialogData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-library-navigator',
  templateUrl: './library-navigator.component.html',
  styleUrls: ['./library-navigator.component.css']
})
export class LibraryNavigatorComponent implements OnInit {

  libraries: Library[] = [];
  filteredLibraries: Library[] = [];

  filterText: string;

  constructor(
    private librariesService: LibrariesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getLibraries();
  }

  private getLibraries() {
    this.librariesService.getLibraries().subscribe(data => { this.libraries = data; this.filteredLibraries = this.libraries; });
  }

  filterLibraries() {
    this.filterText = this.filterText.trim();
    this.filteredLibraries = this.libraries.filter((lib: Library) => lib.name.includes(this.filterText)) //todo is this the best way
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateLibraryDetailsComponent, {
      width: '750px',
      data: { name: '', description: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getLibraries();
      //this.animal = result;
    });
  }


  edit(id: any) {
    console.log("edit " + id);
  }

  tags(id: any) {
    console.log("tags " + id);
  }
}
