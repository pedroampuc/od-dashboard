import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdSearchBarComponent } from './od-search-bar.component';

describe('OdSearchBarComponent', () => {
  let component: OdSearchBarComponent;
  let fixture: ComponentFixture<OdSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
