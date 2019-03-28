import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLibraryLauncherComponent } from './create-library-launcher.component';

describe('CreateLibraryLauncherComponent', () => {
  let component: CreateLibraryLauncherComponent;
  let fixture: ComponentFixture<CreateLibraryLauncherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLibraryLauncherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLibraryLauncherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
