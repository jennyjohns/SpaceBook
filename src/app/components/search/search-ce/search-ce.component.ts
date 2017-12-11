import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CBService} from '../../../services/cb.service.client';
import {CEService} from '../../../services/ce.service.client';

@Component({
  selector: 'app-search-ce',
  templateUrl: './search-ce.component.html',
  styleUrls: ['./search-ce.component.css']
})
export class SearchCeComponent implements OnInit {


  @Input()
  ce: any;
  picture: string;
  name: string;
  ceId: string;
  originalUserId: String;
  errorFlag: Boolean;
  errorMessage: String;

  constructor(private activatedRoute: ActivatedRoute,
              private ceService: CEService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.originalUserId = params['uid'];
      });
    this.picture = this.ce.picture;
    this.name = this.ce.name;
    this.ceId = this.ce._id;
    this.errorFlag = false;
  }


}
