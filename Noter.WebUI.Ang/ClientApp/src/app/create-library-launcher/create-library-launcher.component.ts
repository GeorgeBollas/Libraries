import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, fadeInContent } from '@angular/material';
import { CreateLibraryDetailsComponent } from '../create-library-details/create-library-details.component';

export interface CreateLibraryDialogData {
  name: string;
  description: string;
}


@Component({
  selector: 'app-create-library-launcher',
  template: `
      <button mat-mini-fab (click)="openDialog()"><mat-icon>library_add</mat-icon></button>
  `,
  styles: []
})
export class CreateLibraryLauncherComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
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

}
