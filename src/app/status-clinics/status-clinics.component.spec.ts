import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusClinicsComponent } from './status-clinics.component';

describe('StatusClinicsComponent', () => {
  let component: StatusClinicsComponent;
  let fixture: ComponentFixture<StatusClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
