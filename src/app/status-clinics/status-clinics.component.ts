import { Clinic } from './../model/clinic.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-clinics',
  templateUrl: './status-clinics.component.html',
  styleUrls: ['./status-clinics.component.scss']
})
export class StatusClinicsComponent implements OnInit {

  @Input() clinic: Clinic;
  constructor() { }


  ngOnInit() {
  }
}
