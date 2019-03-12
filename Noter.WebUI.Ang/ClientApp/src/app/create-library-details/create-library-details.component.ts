import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { CreateLibraryDialogData } from '../library-navigator/library-navigator.component';
import { CreateLibrary } from './CreateLibrary';
import { LibrariesService } from '../services/libraries/libraries.service';
import { error } from 'protractor';



@Component({
  selector: 'app-create-library-details',
  templateUrl: './create-library-details.component.html',
  styleUrls: ['./create-library-details.component.css']
})
export class CreateLibraryDetailsComponent implements OnInit {

  public Editor = ClassicEditor;

  newLibrary: CreateLibrary

  panelOpenState: boolean = false;

  constructor(
    private libraryService: LibrariesService,
    public dialogRef: MatDialogRef<CreateLibraryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateLibraryDialogData) {
    this.newLibrary = new CreateLibrary("", "");
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  //todo
  // 1. close the dialog (done)
  // 2. refresh list of libraries

  onSubmit() {
    console.log('onSubmit');
    this.libraryService.createLibrary(this.newLibrary.name, this.newLibrary.description)
      .subscribe(
        data => {
          console.log(data);
          this.dialogRef.close();
        },
        error => console.log(error)
      )
  }

  // done this way because material only has space for one error at a time
  //getErrorMessage() {
  //  return this.name.hasError('required') ? 'You must enter a value' : '';
  //}
}
