import { NgModule } from '@angular/core';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LibraryNavigatorComponent } from './library-navigator/library-navigator.component';
import { CreateLibraryDetailsComponent } from './create-library-details/create-library-details.component';
import { CreateLibraryLauncherComponent } from './create-library-launcher/create-library-launcher.component';
import { LibraryListComponent } from './library-list/library-list.component';

@NgModule({
  declarations: [
    LibraryNavigatorComponent,
    CreateLibraryDetailsComponent,
    CreateLibraryLauncherComponent,
    LibraryListComponent,
  ],
  imports: [
    LibrariesRoutingModule,
    SharedModule,
  ],
  exports: [
    CreateLibraryLauncherComponent,
    LibraryListComponent,
  ],
  entryComponents: [CreateLibraryDetailsComponent], //any dynamically created components go here as well

})
export class LibrariesModule { }
