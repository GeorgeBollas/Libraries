import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as signalR from "@aspnet/signalr";

import { Library } from '../services/libraries/library.models';
import { LibrariesService } from '../services/libraries/libraries.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  libraries$: Observable<Library[]>;

  connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:63315/librarieshub")
    //.withUrl(getBaseUrl() + "librarieshub")
    .build();


  constructor(private librariesService: LibrariesService) {

    this.InitSignalR();

  }

  private InitSignalR() {

    this.connection.on("NotifyLibraryCreated", (libraryId: number) => {
      this.librariesService.getLibraries();
      console.log(`Library created  with id ${libraryId}.`);
    });

    this.connection.start().catch(err => document.write(err));
  }

  ngOnInit() {
    this.libraries$ = this.librariesService.Libraries;

  }

}
