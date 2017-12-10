import {Component, OnInit, ViewChild} from '@angular/core';
import {NgModel} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {PictureServiceClient} from "../../../services/picture.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-picture-new',
  templateUrl: './picture-new.component.html',
  styleUrls: ['./picture-new.component.css']
})
export class PictureNewComponent implements OnInit {

  @ViewChild('f') newPictureForm: NgModel;
  pic = {};
  picId: String;
  userId: String;
  albumId: String;
  pictures = [];
  url: String;
  width: String;
  baseURL = environment.baseUrl;
  dateCreated: Date;
  text: String;
  title: String;

  constructor(private pictureService: PictureServiceClient, private router: Router,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.albumId = params['aid'];
          console.log('albumId is', this.albumId);
          this.dateCreated = new Date;
        }
      );
    this.pictureService.findPicturesByAlbum(this.albumId)
      .subscribe((pictures: any) => {
        this.pictures = pictures;
      });
  }

  commit(text: String, title: String, width: String, url: String) {
    this.pic = {text: text, title: title, width: width, url: url, dateUploaded: this.dateCreated, albumId: this.albumId};
    console.log(this.pic);
    this.pictureService.createPicture(this.albumId, this.pic)
      .subscribe((album) => {
      console.log('why am I subsccribing to an album?');
      // this.pic = pic;
      console.log('album is this', album);
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);
      });
  }

  cancel() {
    this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);

  }

}
