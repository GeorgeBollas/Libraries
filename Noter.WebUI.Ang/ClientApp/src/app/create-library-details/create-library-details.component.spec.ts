import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLibraryDetailsComponent } from './create-library-details.component';

describe('CreateLibraryDetailsComponent', () => {
  let component: CreateLibraryDetailsComponent;
  let fixture: ComponentFixture<CreateLibraryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLibraryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLibraryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
