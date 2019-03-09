import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNavigatorComponent } from './library-navigator.component';

describe('LibraryNavigatorComponent', () => {
  let component: LibraryNavigatorComponent;
  let fixture: ComponentFixture<LibraryNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
