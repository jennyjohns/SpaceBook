import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service.client';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  @Input()
  IDfromProfile: String;
  @Input()
  posts: any[];

  constructor(private postService: PostService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

  }

  /**
   * Right now this deletes post. Will have to refactor this to just simply update the post without one's tag later.
   * @param ID
   */
  removeMyTag(ID) {
  this.postService.deletePost(ID)
    .subscribe((post) => {
      this.postService.findPostsByUser(this.IDfromProfile)
        .subscribe((posts) => {
          this.posts = posts;
        });
    });
  }

}

