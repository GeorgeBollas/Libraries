import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryListComponent } from './library-list/library-list.component';

const appRoutes: Routes = [
  { path: '', component: LibraryListComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class LibrariesRoutingModule { }
