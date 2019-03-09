import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { Library } from '../services/libraries/library';

import { LibrariesService } from '../services/libraries/libraries.service'

@Component({
  selector: 'app-library-navigator',
  templateUrl: './library-navigator.component.html',
  styleUrls: ['./library-navigator.component.css']
})
export class LibraryNavigatorComponent implements OnInit {

  libraries: Library[] = [];
  filteredLibraries: Library[] = [];

  filterText = 'filter text so far...';

  constructor(private librariesService: LibrariesService) { }

  ngOnInit() {
    this.librariesService.getLibraries().subscribe(data => { this.libraries = data.libraries; this.filteredLibraries = this.libraries });
  }

  filterLibraries(filterText: string) {
    this.filterText = filterText.trim();
    this.filteredLibraries = this.libraries.filter( (lib:Library) => lib.name.includes(this.filterText)) //todo is this the best way
  }
}
