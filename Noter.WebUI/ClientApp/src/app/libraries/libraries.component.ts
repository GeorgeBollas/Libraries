import { Component, OnInit } from '@angular/core';
import { LibrariesClient, LibraryListViewModel } from '../noter-api';

@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {

  libraryListVM: LibraryListViewModel;

  constructor(client: LibrariesClient) {
    client.getAll().subscribe(result => {
      this.libraryListVM = result;
    }, error => console.error(error))
  }

  ngOnInit() {
  }

}


