import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-nasa',
  templateUrl: './search-nasa.component.html',
  styleUrls: ['./search-nasa.component.css']
})
export class SearchNasaComponent implements OnInit {
  @Input()
  nasaObject: any;
  description: string;
  picture: string;
  title: string;
  date: string;
  details = false;

  constructor() { }

  ngOnInit() {

    this.description = this.nasaObject.data['0'].description;
    if (this.description.length > 140) {
      this.description = this.description.slice(0, 140);
      this.description += '...';
    }

    this.picture = this.nasaObject.links['0'].href;
    this.title = this.nasaObject.data['0'].title;
    this.date = this.nasaObject.data['0'].date_created;
  }

  showDetails() {
    if (this.details === true) {
      this.details = false;
    } else {
      this.details = true;
    }
  }
}
