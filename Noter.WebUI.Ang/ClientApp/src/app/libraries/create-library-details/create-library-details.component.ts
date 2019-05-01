import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormControl, FormGroup, Validators, NgModel } from '@angular/forms';

import { HttpErrorResponse } from '@angular/common/http';

import { CreateLibraryDialogData } from '../create-library-launcher/create-library-launcher.component';
import { CreateLibrary } from './CreateLibrary';
import { LibrariesService } from '../services/libraries/libraries.service';



@Component({
  selector: 'app-create-library-details',
  templateUrl: './create-library-details.component.html',
  styleUrls: ['./create-library-details.component.css']
})
export class CreateLibraryDetailsComponent implements OnInit {

  newLibrary: CreateLibrary
  

  @ViewChild('name') nameField: NgModel;
  @ViewChild('description') descrField: NgModel;

  panelOpenState: boolean = false;

  constructor(
    private libraryService: LibrariesService,
    public dialogRef: MatDialogRef<CreateLibraryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateLibraryDialogData) {
    this.newLibrary = new CreateLibrary("","");
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    console.log('cancel clicked');
    this.dialogRef.close();
  }


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
    console.log('handle error');

    //todo: error may not be 400 may be 4xx

    if (error.status == 400 && error.error.failures) {

      // validation errors
      var failures = error.error.failures;

      if (failures.Name) {
        var nameError = failures.Name[0];
        this.nameField.control.setErrors({ serverError: nameError });
      }

      if (failures.Description) {
        var descrError = failures.Description[0];
        this.descrField.control.setErrors({ serverError: descrError });
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
