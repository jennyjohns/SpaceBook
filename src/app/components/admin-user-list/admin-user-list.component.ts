import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service.client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.findAllUsers()
      .subscribe((users: any) => {
        this.users = users;
      })
  }

  goToUserPage(userId) {
    this.router.navigate(['user/' + userId]);
  }

}
