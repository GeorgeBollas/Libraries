import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../services/libraries/library.models';
import { LibrariesService } from '../services/libraries/libraries.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  libraries$: Observable<Library[]>;


  constructor(
    private librariesService: LibrariesService,
  ) {

  }

  ngOnInit() {
    this.libraries$ = this.librariesService.Libraries;

  }

}
