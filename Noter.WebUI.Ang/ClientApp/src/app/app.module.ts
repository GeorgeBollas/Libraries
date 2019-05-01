import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoterMaterialModule } from './material-module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { SearchComponent } from './search/search.component';

import { LibrariesModule } from './libraries/libraries.module'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SearchComponent,
  ],
  imports: [
    [BrowserAnimationsModule],
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NoterMaterialModule,
    LibrariesModule,
    AppRoutingModule //note: should be after any modules that define routes to get the right order (if you have a wild card route)
  ],
  providers: [], //note add the LibrariesService here if neede
  bootstrap: [AppComponent]
})
export class AppModule { }
