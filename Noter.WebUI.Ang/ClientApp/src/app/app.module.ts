import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoterMaterialModule } from './material-module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LibraryNavigatorComponent } from './library-navigator/library-navigator.component';
import { SearchComponent } from './search/search.component';
import { CreateLibraryDetailsComponent } from './create-library-details/create-library-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LibraryNavigatorComponent,
    SearchComponent,
    CreateLibraryDetailsComponent,
  ],
  imports: [
    [BrowserAnimationsModule],
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NoterMaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'search/:id', component: SearchComponent },
    ])
  ],
  entryComponents: [CreateLibraryDetailsComponent], //any dynamically created components go here as well
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
