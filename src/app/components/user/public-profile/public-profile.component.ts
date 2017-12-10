import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {PostService} from '../../../services/post.service.client';
import {CBService} from '../../../services/cb.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {environment} from '../../../../environments/environment';
import {isUndefined} from 'util';
import {AlbumServiceClient} from '../../../services/album.service.client';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})

export class PublicProfileComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private postService: PostService,
              private cbService: CBService,
              private sharedService: SharedService,
              private albumService: AlbumServiceClient) {
  }

  objType: String;
  objId: String;
  objData = {};
  follows: any[];
  birthday: Boolean;
  DOB: String;
  today = new Date();
  birthdayMsg = 'Happy Birthday!';
  postsInPublicProfile: any[];
  dataReady: boolean;
  user: any;
  sharedServiceUserId: String;
  baseURL = environment.baseUrl;
  currentURL: String;
  flipper: boolean;
  albumid: string;
  albumReady = true;


  ngOnInit() {

    this.dataReady = false;
    this.flipper = true;

    console.log('set to true');
    this.user = this.sharedService.user;
    this.sharedServiceUserId = this.user._id;
    console.log('PPasdfa the user from sharedService is: ', this.user);
    this.prepAlbum();
    this.currentURL = window.location.href;
    if (this.currentURL.includes('api/login')) {
      this.flipper = false;
      console.log('set to false');
    }
//   console.log('contains API/LOGIN');
    console.log('whats the username', this.user.username);
    if (this.user.username === undefined) {
      console.log('was undefined');
      this.router.navigate([this.baseURL, 'user', this.user._id, 'edit']);
    } else {
      if (this.flipper) {
        this.activatedRoute.params
          .subscribe(
            (params: any) => {
              console.log('entering activated route');
              this.objId = params['uid'];
              console.log(this.objId);
              this.objType = params['obtype'];
            }
          );
        this.birthday = false;
        switch (this.objType) {
          case 'cb':
            this.getCBData(this.objId);
            break;
          case 'ce':
            break;
          case 'user':
            this.getUserData(this.objId);
            break;
          case 'org':
            break;
        }
      } else {
        this.objId = this.user._id;
        this.objType = 'user';
        this.getUserData(this.objId);
        this.router.navigate([this.baseURL, 'user', this.user._id]);
      }
      // this.activatedRoute.params
      //   .subscribe(
      //     (params: any) => {
      //       console.log('entering activated route');
      //       this.objId = params['uid'];
      //       console.log(this.objId);
      //       this.objType = params['obtype'];
      //     }
      //   );
      // this.birthday = false;
      // switch (this.objType) {
      //   case 'cb':
      //     this.getCBData(this.objId);
      //     break;
      //   case 'ce':
      //     break;
      //   case 'user':
      //     this.getUserData(this.objId);
      //     break;
      //   case 'org':
      //     break;
      // }
    }
    // if (this.objType === 'user') {
    //   console.log('username is this', this.objData['username']);
    //   this.postService.findPostsbyTag(this.objData['username'])
    //     .subscribe((posts) => {
    //     console.log('hello are we here?');
    //       this.postsInPublicProfile = posts;
    //       console.log('these are the posts', this.postsInPublicProfile);
    //     });
    // } else {
    //   this.postService.findPostsbyTag(this.objData['name'])
    //     .subscribe((posts) => {
    //       this.postsInPublicProfile = posts;
    //     });
    // }
    // console.log(this.follows);
  }

  editProfile() {
    this.router.navigate(['user/' + this.objId + '/edit']);
  }

  goToUserProfile(objId) {
    this.router.navigate(['user/' + objId]);
    this.ngOnInit();
  }

  navigateToPost() {
    this.router.navigate(['user/' + this.objId + '/posts/new']);

  }

  search() {
    this.router.navigate(['user/' + this.objId + '/search']);
  }

  getCBData(objId) {
    this.cbService.findCBbyId(this.objId).subscribe((cb: any) => {
      this.objData = cb;
      this.follows = [];
      this.findPostsForNonUserDataByTag();
      this.dataReady = true;
    });
  }

  /**
   * Helper function for non-user object's post retrieval by tag.
   */
  findPostsForNonUserDataByTag() {
    this.postService.findPostsbyTag(this.objData['name'])
      .subscribe((posts) => {
        this.postsInPublicProfile = posts;
      });
  }


  getUserData(objId){
    this.objData = this.sharedService.user;

    var f = [];
    for (var i = 0; i < this.objData['follows'].length; i++) {
            this.userService.findUserById(this.objData['follows'][i])
              .subscribe((user1: any) => {
                f.push(user1);
              });
            this.follows = f;
          }
    this.findPostsByTagForUser();
    this.dataReady = true;

  }

  /**
   * Helper function for getUserData()
   */
  findPostsByTagForUser() {
    this.postService.findPostsbyTag(this.objData['username'])
      .subscribe((posts) => {
        console.log('hello are we here?');
        this.postsInPublicProfile = posts;
        console.log('these are the posts', this.postsInPublicProfile);
      });
  }

  deleteFollow(objId) {
    console.log(objId);
    for (var i = 0; i < this.follows.length; i++) {
      if (this.follows[i]._id === objId) {
        this.follows.splice(i, 1);
      }
    }
    this.sharedService.user['follows'] = [];
    for(var i = 0; i < this.follows.length; i++) {
      this.sharedService.user['follows'].push(this.follows[i]._id);
    }
    this.userService.updateUser(this.objId, this.sharedService.user)
      .subscribe( (usr: any) => {
      });
  }

  goToAlbums() {
    this.router.navigate(['user/' + this.objId + '/album']);
  }

  ifIdEqualPosterId() {
    return (this.objId === this.sharedServiceUserId);
  }

  logout() {
    this.userService.logout()
      .subscribe((status) => {
        this.router.navigate(['login']);
      });
  }

  prepAlbum() {

      if (this.user.albums.length > 0) {
        this.albumid = this.user.albums[0];
        console.log(this.albumid);
        this.albumReady = true;
      }
  }
  authorized() {
    if (this.sharedService.user['_id'] === this.objId) {
      return true;
    } else if ((this.objType === 'user') && (this.sharedService.isType('ADMIN'))) {
      return true;
    } else if ((this.objType === 'ce') && (this.sharedService.isType('PROFESSIONAL'))) {
      return true;
    } else if ((this.objType === 'cb') && (this.sharedService.isType('ORGANIZATION'))) {
      return true;
    } else {
      return false;
    }
  }

}

//
//
// if (this.currentURL.includes('api/login')) {
//   console.log('contains API/LOGIN');
//   this.objId = this.user._id;
//   this.objType = 'user';
//   this.birthday = false;
//   switch (this.objType) {
//     case 'cb':
//       this.getCBData(this.objId);
//       break;
//     case 'ce':
//       break;
//     case 'user':
//       this.getUserData(this.objId);
//       break;
//     case 'org':
//       break;
//   }
// } else {
//   this.activatedRoute.params
//     .subscribe(
//       (params: any) => {
//         console.log('entering activated route');
//         this.objId = params['uid'];
//         console.log(this.objId);
//         this.objType = params['obtype'];
//         this.birthday = false;
//         switch (this.objType) {
//           case 'cb':
//             this.getCBData(this.objId);
//             break;
//           case 'ce':
//             break;
//           case 'user':
//             this.getUserData(this.objId);
//             break;
//           case 'org':
//             break;
//         }
//       }
//     );
// }
// }
