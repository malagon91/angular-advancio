import { Representative } from './Representative';
import { Injectable } from '@angular/core';
import {HttpModule,Http, Headers} from  '@angular/http';
import { URLSearchParams, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {Observable} from "rxjs/Observable";


@Injectable()
export class RepresentativeSvrService {
  headers:Headers;
  constructor(private _http: Http ) {
    this.headers =
      new Headers({'Content-Type': 'application/json'});
  }

  getRepre(){
      return this._http.get('http://localhost/api/representativeapi', {})
      .map(response  => response.json());


  }
  getRepreUrl(url:string){
    return this._http.get(url, {})
    .map(response  => response.json());


}
  saveRep(rep: Representative){
    return this._http.post('http://localhost/api/representativeapi', JSON.stringify(rep), {headers: this.headers})
    	           .map(res => res.json());

  }
  deleteRep(rep: Representative){
    let myParams = new URLSearchParams();
    myParams.append('id', rep.id.toString());
    return this._http.delete('http://localhost/api/representativeapi/'+ rep.id)
    	           .map(res => res.json());

  }


}
