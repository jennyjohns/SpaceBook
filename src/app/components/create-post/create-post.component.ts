import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {environment} from '../../../environments/environment';
import {SharedService} from '../../services/shared.service.client';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  posterId: String;
  postId: String;
  post: any;
  posts: any[];
  usernameOfPoster: String;
  url: String;
  text: String;
  images: any[];
  width: Number;
  date: Date;
  likes: Number;
  tag: any;
  tags: any[];
  user: any;
  baseUrl = environment.baseUrl;

  constructor(private postService: PostService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.posterId = params['uid'];
      // this.postId = params['pid']
    });
    this.user = this.sharedService.user;
    this.usernameOfPoster = this.user.username;
    // this.userService.findUserById(this.posterId)
    //   .subscribe((user) => {
    //   this.user = user;
    //   this.usernameOfPoster = user.username;
    //   });
    this.tags = [];
    // this.postService.findPostbyId(this.postId)
    //   .subscribe((post) => {
    //     this.post = post;
    //     this.usernameOfPoster  = post.username;
    //     this.text = post.text;
    //     this.usernameOfPoster = post.username;
    //     this.images = post.images;
    //     this.date = post.date;
    //     this.likeAmount = post.likeAmount;
    //     this.tags = post.tags;
    //   });
    // this.postService.findAllPosts()
    //   .subscribe((posts) => {
    //   this.posts = posts;
    // });
  }

  deleteThisPost(ID) {
    this.postService.deletePost(this.postId)
      .subscribe(() => {
        this.router.navigate(['user/', this.posterId]);
      });
    this.text = null;
  }

  addTag() {
    this.userService.findUserByUsername(this.tag)
      .subscribe((user) => {
      if (user) {
        this.tags.push(this.tag);
        this.tag = null;
      } else {
        alert('user does not exist, tag not added');
      }
      });
  }

  createThisPost() {
    this.tags.push(this.usernameOfPoster);
    const newPost = {poster: this.posterId, text: this.text, likes: 0,
    date: new Date(), images: [this.url],  tags: this.tags};
    this.postService.createPost(newPost)
      .subscribe((posts) => {
      // this.posts = posts;
      //   this.router.navigate([this.baseUrl + 'user/', this.posterId]);
      //   this.ngOnInit();
      });
  }


}
