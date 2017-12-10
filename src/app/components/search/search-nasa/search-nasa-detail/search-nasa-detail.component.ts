import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-nasa-detail',
  templateUrl: './search-nasa-detail.component.html',
  styleUrls: ['./search-nasa-detail.component.css']
})
export class SearchNasaDetailComponent implements OnInit {
  @Input()
  obj: any;
  stringify: string;
  description: string;

  constructor() { }

  ngOnInit() {
    this.stringify = JSON.stringify(this.obj).replace(',', ',<br>');
    this.description = this.obj.data['0'].description;

  }

}
