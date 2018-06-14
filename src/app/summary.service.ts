import { Transaction } from './Transaction';
import { Representative } from './Representative';
import { Injectable } from '@angular/core';
import {HttpModule,Http, Headers} from  '@angular/http';
import { URLSearchParams, Jsonp } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SummaryService {

  headers:Headers;
  constructor(private _http: Http ) {
    this.headers =
      new Headers({'Content-Type': 'application/json'});
  }

  getSumm(){
    return this._http.get('http://localhost/api/concentrates', {})
    .map(response  => response.json());
}

}
