import {Component, Input, OnInit} from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import {AlbumServiceClient} from '../../services/album.service.client';
import {PictureServiceClient} from "../../services/picture.service.client";

@Component({
  selector: 'app-album-carousel',
  templateUrl: './album-carousel.component.html',
  styleUrls: ['./album-carousel.component.css']
})
export class AlbumCarouselComponent implements OnInit {
  @Input()
  albumid: string;
  album = [];
  albumready = false;
  imageSources = [];
  config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 5000,
    stopAutoplayMinWidth: 768
  };

  constructor(private pictureService: PictureServiceClient, private albumService: AlbumServiceClient) { }

  ngOnInit() {

    this.pictureService.findPicturesByAlbum(this.albumid).subscribe((pictures: any) => {

      for (let i = 0; i < pictures.length; i++) {
        this.imageSources.push(pictures[i].url);
      }
      this.albumready = true;
    });
  }

}
