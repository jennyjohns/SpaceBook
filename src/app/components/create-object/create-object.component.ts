import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service.client';
import {Router} from '@angular/router';
import {CBService} from '../../services/cb.service.client';

@Component({
  selector: 'app-create-object',
  templateUrl: './create-object.component.html',
  styleUrls: ['./create-object.component.css']
})
export class CreateObjectComponent implements OnInit {
  @ViewChild('f') createForm: NgForm;
  objType: string;
  types = ['User', 'Celestial Body', 'Celestial Event', 'Publication'];
  user = {username: '', password: '', email: '', firstName: '',
    lastName: '', DOB: '', phone: '', picture: '', userType: ''};
  cb = {name: '', region: '', types: '', wiki: '', picture: ''};
  ce = {name: '', region: '', types: '', wiki: '', picture: '', start: '', end: ''};
  pub = {name: '', authors: '', link: '', abstract: '', tags: [], date: ''};

  constructor(private cbService: CBService, private router: Router, private userService: UserService) { }

  ngOnInit() {

  }
  create() {
    if (this.objType === 'User') {
      this.user.username = this.createForm.value.username;
      this.user.password = this.createForm.value.password;
      this.user.email = this.createForm.value.email;
      this.user.firstName = this.createForm.value.firstName;
      this.user.lastName = this.createForm.value.lastName;
      this.user.DOB = this.createForm.value.DOB;
      this.user.phone = this.createForm.value.phone;
      this.user.picture = 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg';
      this.user.userType = this.createForm.value.user.type;

      this.userService.createUser(this.user).subscribe((user: any) => {
        console.log('User Created!');
      });

    } else if (this.objType === 'Cb') {
      this.cb.name = this.createForm.value.cbname;
      this.cb.region = this.createForm.value.region;
      this.cb.types = this.createForm.value.types;
      this.cb.wiki = this.createForm.value.wiki;
      this.cb.picture = this.createForm.value.picture;

      console.log(this.cb);

      this.cbService.createCB(this.cb).subscribe((cb: any) => {
        console.log('CB created!');
      });
    } else {
      console.log('cant make one of those yet');
    }
  }

}
