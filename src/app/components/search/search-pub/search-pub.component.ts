import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-pub',
  templateUrl: './search-pub.component.html',
  styleUrls: ['./search-pub.component.css']
})
export class SearchPubComponent implements OnInit {



  @Input()
  pub: any;
  picture: string;
  name: string;
  pubId: string;
  originalUserId: String;
  errorFlag: Boolean;
  errorMessage: String;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.originalUserId = params['uid'];
      });
    this.picture = 'https://encrypted-tbn0.gstatic.com/' +
      'images?q=tbn:ANd9GcTkXo82F1PJkCzZO37XDfljAX5D85fw1_iBV1JmfunIlq0NXqUr';
    this.name = this.pub.name;
    this.pubId = this.pub._id;
    this.errorFlag = false;
    // console.log(this.picture);
  }

  addToFollow(cbId) {
  }

}
