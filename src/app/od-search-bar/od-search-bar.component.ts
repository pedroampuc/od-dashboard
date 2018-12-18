import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-od-search-bar',
  templateUrl: './od-search-bar.component.html',
  styleUrls: ['./od-search-bar.component.scss']
})
export class OdSearchBarComponent implements OnInit {

  @Input() search: String;
  constructor() { }

  ngOnInit() {
  }

}
