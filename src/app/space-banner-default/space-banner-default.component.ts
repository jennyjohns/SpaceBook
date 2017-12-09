import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../services/shared.service.client';

@Component({
  selector: 'app-space-banner-default',
  templateUrl: './space-banner-default.component.html',
  styleUrls: ['./space-banner-default.component.css']
})
export class SpaceBannerDefaultComponent implements OnInit {
  title: String;
  userId: String;
  user: any;


  constructor(private userService: UserService,
              private sharedService: SharedService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.user = this.sharedService.user;
  }

  navigateToProfile() {
    this.router.navigate(['user', this.user._id]);
  }

  navigateToSearch() {
    this.router.navigate(['search']);
  }

  /**
   * This will have to be improved for security.
   */
  logOut() {
    this.router.navigate(['/login']);
  }

}
