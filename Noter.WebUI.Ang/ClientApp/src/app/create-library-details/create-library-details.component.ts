import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { CreateLibraryDialogData } from '../library-navigator/library-navigator.component';

@Component({
  selector: 'app-create-library-details',
  templateUrl: './create-library-details.component.html',
  styleUrls: ['./create-library-details.component.css']
})
export class CreateLibraryDetailsComponent implements OnInit {

  name = new FormControl('', [Validators.required]);
  description = new FormControl('', []);

  constructor(
    public dialogRef: MatDialogRef<CreateLibraryDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateLibraryDialogData)
  {
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }
}
