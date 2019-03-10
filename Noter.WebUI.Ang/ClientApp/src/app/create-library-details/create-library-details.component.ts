import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CreateLibraryDialogData } from '../library-navigator/library-navigator.component';
import { CreateLibrary } from './CreateLibrary';

@Component({
  selector: 'app-create-library-details',
  templateUrl: './create-library-details.component.html',
  styleUrls: ['./create-library-details.component.css']
})
export class CreateLibraryDetailsComponent implements OnInit {

  newLibrary: CreateLibrary

  constructor(
    public dialogRef: MatDialogRef<CreateLibraryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateLibraryDialogData)
  {
    this.newLibrary = new CreateLibrary("", "");
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }


  // done this way because material only has space for one error at a time
  //getErrorMessage() {
  //  return this.name.hasError('required') ? 'You must enter a value' : '';
  //}
}
