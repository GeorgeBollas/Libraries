import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormControl, FormGroup, Validators, NgModel } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { HttpErrorResponse } from '@angular/common/http';

import { CreateLibraryDialogData } from '../library-navigator/library-navigator.component';
import { CreateLibrary } from './CreateLibrary';
import { LibrariesService } from '../services/libraries/libraries.service';



@Component({
  selector: 'app-create-library-details',
  templateUrl: './create-library-details.component.html',
  styleUrls: ['./create-library-details.component.css']
})
export class CreateLibraryDetailsComponent implements OnInit {

  public Editor = ClassicEditor;

  newLibrary: CreateLibrary
  

  @ViewChild('name') nameField: NgModel;

  panelOpenState: boolean = false;

  constructor(
    private libraryService: LibrariesService,
    public dialogRef: MatDialogRef<CreateLibraryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateLibraryDialogData) {
    //this.newLibrary = new CreateLibrary("library " + (new Date()).toISOString(), "");
    this.newLibrary = new CreateLibrary("","");
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
      error => this.handleError(error) // this will be a ValidationException or other http type exception
      )
  }

  handleError(error: HttpErrorResponse) {

    //todo: error may not be 400 may be 4xx

    if (error.status == 400 && error.error.failures) {

      // validation errors
      var failures = error.error.failures;

      if (failures.Name) {
        var nameError = failures.Name[0];
        this.nameField.control.setErrors({ serverError: nameError });
      }

      //todo write a generic routine that matches the failure fields to the input controls errors


    }
    else {
      //todo: notify
      alert(error.statusText);
    }
  }


  //getErrorMessage() {
  //  return this.email.hasError('required') ? 'You must enter a value' :
  //    this.email.hasError('email') ? 'Not a valid email' :
  //      '';
  //}

}
