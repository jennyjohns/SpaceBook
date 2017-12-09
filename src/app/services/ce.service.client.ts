import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class CEService {
  constructor(private http: Http) {}
  baseURL = environment.baseUrl;
  api = {
    'createCE'   : this.createCE,
    'findCEbyId' : this.findCEbyId,
    'findCEbyText': this.findCEbyText,
    'updateCE' : this.updateCE,
    'deleteCE' : this.deleteCE
  };

  createCE(ce: any) {
    const url = this.baseURL + '/api/ce';
    return this.http.post(url, ce)
      .map((response: Response) => {
        return response.json();
      });
  }

  findCEbyId(ceId: String) {
    const url = this.baseURL + '/api/ce/' + ceId;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  findCEbyText(text: String) {
    const url = this.baseURL + '/api/ce?text=' + text;
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateCE(ceId: String, ce: any) {
    const url = this.baseURL + '/api/ce/' + ceId;
    return this.http.put(url, ce)
      .map((response: Response) => {
        return response.json();
      });
  }

  deleteCE(ceId: String) {
    const url = this.baseURL + '/api/ce/' + ceId;
    return this.http.delete(url);
  }
}
