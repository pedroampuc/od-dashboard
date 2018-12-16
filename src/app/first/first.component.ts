import { Clinic } from './../model/clinic.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public clinics = [];
  public c = new Clinic();

  constructor() {

    this.c = new Clinic();
    this.c.c_curr_day_studies_total = 12;
    this.c.c_name = 'Perinatal';
    this.c.c_status = 1;

    this.clinics.push(this.c);

    this.c = new Clinic();
    this.c.c_curr_day_studies_total = 44;
    this.c.c_name = 'Helio Povoa';
    this.c.c_status = 0;

    this.clinics.push(this.c);

    this.c = new Clinic();
    this.c.c_curr_day_studies_total = 187;
    this.c.c_name = 'Granato';
    this.c.c_status = 2;

    this.clinics.push(this.c);

    this.c = new Clinic();
    this.c.c_curr_day_studies_total = 187;
    this.c.c_name = 'Hospital da Lagoa';
    this.c.c_status = 3;
    this.clinics.push(this.c);
  }

  ngOnInit() {
  }

}
