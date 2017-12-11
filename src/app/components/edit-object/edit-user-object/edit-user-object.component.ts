import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-edit-user-object',
  templateUrl: './edit-user-object.component.html',
  styleUrls: ['./edit-user-object.component.css']
})
export class EditUserObjectComponent implements OnInit {
  @ViewChild('f') editUser: NgForm;

  userId: String;
  user = {};
  type: String;
  username: String;
  email: String;
  firstName: String;
  lastName: String;
  DOB: String;
  phone: String;
  remove: String;
  userType = [];


  constructor(private userService: UserService, private router: Router, private activateRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    console.log('IN EDIT USER');
    this.activateRoute.params
      .subscribe((params: any) => {
        this.userId = params['objId'];
      });
    this.userService.findUserById(this.userId)
      .subscribe((user: any) => {
        this.user = user;
        // this.userType = user['userType'];
        console.log(user['userType']);
        // console.log(this.userType.includes(null));
        this.username = user['username'];
        this.email = user['email'];
        this.firstName = user['firstName'];
        this.lastName = user['lastName'];
        this.DOB = user['DOB'];
        this.phone = user['phone'];
        if(user['userType'].length === 1 && user['userType'].includes(null)) {
          this.userType = [];
        }else {
          this.userType = user['userType'];
        }
      });

  }

  deleteUser(userId) {
    this.userService.deleteUser(userId)
      .subscribe((status: any) => {

      });
  }

  commit(username, email, firstName, lastName, phone, DOB, type, remove) {
    if(!this.userType.includes(this.type)) {
      this.userType.push(this.type);
    }
    console.log('UT', this.userType);
    this.type = type;
    console.log('TYPE', this.type);
    this.remove = remove;
    console.log('REMOVE', this.remove);
    this.userType.splice(this.userType.indexOf(this.remove), 1);

    const user = {username: username, email: email, firstName: firstName, lastName: lastName,
      phone: phone, DOB: DOB, userType: this.userType};
    this.userService.updateUser(this.userId, user)
      .subscribe((status: any) => {
        const u = this.sharedService.user;
        this.router.navigate(['user/' + u['_id']]);
      });
  }

}
