import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {SharedService} from './shared.service.client';
import {Router} from '@angular/router';


@Injectable()

export class UserService {
  options: RequestOptions = new RequestOptions();

  constructor(private http: Http, private router: Router, private sharedService: SharedService) {}
  baseURL = environment.baseUrl;

  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername' : this.findUserByUsername,
    'findUserByCredentials' : this.findUserByCredentials,
    'updateUser' : this.updateUser,
    'deleteUser' : this.deleteUser,
    'register' : this.register
  };

  logout() {
    const url = this.baseURL + '/api/logout';
    this.options.withCredentials = true;
    return this.http.post(url, '', this.options)
      .map((status) => {
        return status;
      }); }



  login(username, password) {
    const url = this.baseURL + '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  }

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseURL + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user so as to share with all components
            console.log('hello from LoggedIn');
            // this.router.navigate(['user', user._id])
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        } );
  }

  register(user, password) {
    const url = this.baseURL + '/api/register';
    const credentials = {
      user: user,
      username: user.username,
      password: password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      picture: user.picture,
      DOB: user.DOB,
      phone: user.phone,
      albums: user.albums,
      follows: user.follows
    };
    this.options.withCredentials = true;
    return this.http.post(url, credentials, this.options)
      .map((response: Response) =>  {
        return response.json();
      });
  }

  addFollower(userId, followedId) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.put(url, followedId)
      .map((response: Response) => {
        return response.json();
      });
  }

  createUser(user: any) {
    const url = this.baseURL + '/api/user';
    return this.http.post(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByUsername(username: String) {
    console.log(username);
    const url = this.baseURL + '/api/user?username=' + username;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredentials(username: String, password: String) {
    console.log('IN USER SERVICE TS ', username, password);
    const url = this.baseURL + '/api/user?username=' + username + '&password=' + password;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId: String, user: any) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.put(url, user)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteUser(userId: String) {
    const url = this.baseURL + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
