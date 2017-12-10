import {Component, OnInit, ViewChild} from '@angular/core';
import {PubService} from "../../../services/pub.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service.client";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-publication-object',
  templateUrl: './edit-publication-object.component.html',
  styleUrls: ['./edit-publication-object.component.css']
})
export class EditPublicationObjectComponent implements OnInit {
  @ViewChild('f') editPublication: NgForm;

  pubId: String;
  name: String;
  authors: [String];
  tags: [String];
  link: String;
  abstract: String;
  pubDate: String;
  pub = {};

  constructor(private pubService: PubService, private router: Router, private activatedRoute: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.pubId = "5a2dc86284a41639e80e13df";
        // this.pubId = params['objId'];
      });
    this.pubService.findPubbyId(this.pubId)
      .subscribe((pub: any) => {
        this.pub = pub;
        this.name = pub['name'];
        this.authors = pub['authors'];
        this.tags = pub['tags'];
        this.link = pub['link'];
        this.abstract = pub['abstract'];
        this.pubDate = pub['pubDate'];
      });
  }

  commit(name, authors, tags, link, abstract, pubDate) {
    console.log('PUB', this.pub);
    const pub = {name: name, authors: [authors], tags: [tags], link: link, abstract: abstract, pubDate: pubDate };
    console.log('UPDATED PUB', pub);
    this.pubService.updatePub(this.pubId, pub)
      .subscribe((status: any) => {
        console.log('UPDATE STATUS', status);
        this.router.navigate(['user/' + this.sharedService.user['_id']]);
      });
  }

  deletePub() {
    this.pubService.deletePub(this.pubId)
      .subscribe((status: any) => {
        this.router.navigate(['user/' + this.sharedService.user['_id']]);
      });
  }

}
