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
export class TransactionsService {
  headers:Headers;
  constructor(private _http: Http ) {
    this.headers =
      new Headers({'Content-Type': 'application/json'});
  }

  getTrans(){
    return this._http.get('http://localhost/api/transactionapi', {})
    .map(response  => response.json());
}
getRepCombo(){
  return this._http.get('http://localhost/api/representativescbx', {})
  .map(response  => response.json());
}
saveTran(tran: Transaction){
  return this._http.post('http://localhost/api/transactionapi', JSON.stringify(tran), {headers: this.headers})
               .map(res => res.json());

}
deleteTran(id: number){
  let myParams = new URLSearchParams();
  myParams.append('id', id.toString());
  return this._http.delete('http://localhost/api/transactionapi/'+ id)
               .map(res => res.json());

}
}
