import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';

import { Observable, of, combineLatest } from 'rxjs';

import { Library } from '../services/libraries/library.models';

import { LibrariesService } from '../services/libraries/libraries.service'
import { filter, tap, map, retry, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


class LibraryViewModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public active: boolean
  ) { }
}

@Component({
  selector: 'app-library-navigator',
  templateUrl: './library-navigator.component.html',
  styleUrls: ['./library-navigator.component.css']
})
export class LibraryNavigatorComponent implements OnInit {

  @Input('isCollapsed') isCollapsed: boolean;


  libraries$: Observable<Library[]>;

  filteredLibraries$: Observable<Library[]>;
  pinnedLibraries$: Observable<Library[]>;

  // filters
  includeInactive: FormControl;
  includeInactive$: Observable<boolean>;

  filterText: FormControl;
  filterText$: Observable<string>;



  constructor(
    private librariesService: LibrariesService,
  ) {

  }

  ngOnInit() {
    //todo ensure filter is kept when we do a refresh due to change in libraries
    //librariesService.libraryAdded$.subscribe(id => this.getLibraries()); // or add to the top for now??
    this.libraries$ = this.librariesService.Libraries;

    this.includeInactive = new FormControl('');
    this.includeInactive$ = this.includeInactive.valueChanges.pipe(startWith(false));

    this.filterText = new FormControl('');
    this.filterText$ = this.filterText.valueChanges.pipe(startWith(''));

    this.pinnedLibraries$ = combineLatest(this.libraries$).pipe(
      map(([libs]) => libs.filter(lib => lib.isPinned))
    );

    this.filteredLibraries$ = combineLatest(this.libraries$, this.filterText$, this.includeInactive$).pipe(
      map(([lib, filterString, includeInactive]) =>
        lib.filter(lib => lib.name.toLocaleLowerCase().indexOf(filterString.trim().toLocaleLowerCase()) !== -1
          && !lib.isPinned
          && includeInactive ? true : lib.isActive
        ))
    );
  }

  toggleStar(event) {
    event.preventDefault();
    console.debug('toggeStar');
    console.debug(event);
  }

  edit(id: any) {
    console.log("edit " + id);
  }

  tags(id: any) {
    console.log("tags " + id);
  }
}
