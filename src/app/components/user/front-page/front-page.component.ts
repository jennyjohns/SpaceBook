import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service.client';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: Boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.errorFlag = false;
  }
  // login(username: String, password: String) {
  //   this.username = username;
  //   this.password = password;
  //   this.userService.findUserByCredentials(this.username, this.password)
  //     .subscribe( (user: any) => {
  //       if (user) {
  //         this.router.navigate(['user/', user._id]);
  //       } else {
  //         this.errorFlag = true;
  //       }
  //   });
  // }

  login(username: String, password: String) {
    console.log('entering here');
    this.userService
      .login(username, password)
      .subscribe((user) => {
        this.sharedService.user = user;
        this.router.navigate(['/user', user._id]);
      });
  }

  goTofindAsteroid() {
    this.router.navigate(['/searchAsteroids']);
  }

  goToImageSearch() {
    this.router.navigate(['/nasa-pic']);
  }

  goToAPOD() {
    this.router.navigate(['/APOD']);
  }



}
