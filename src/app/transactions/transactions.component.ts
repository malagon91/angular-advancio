import { Repcbx } from './../Repcbx';
import { TransactionsService } from './../transactions.service';
import { Transaction } from './../Transaction';
import { Component, OnInit } from '@angular/core';
import { PaginatedTran } from '../PaginatedTran';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.less']
})
export class TransactionsComponent implements OnInit {
  Tran: Transaction;
  Trans: Transaction[];
  Reps: Repcbx[];
  PageTran: PaginatedTran;
   //sorting
   key: string = 'id'; //set default
   reverse: boolean = false;
   saving: boolean = false;
  constructor(private _srv: TransactionsService) { }

  ngOnInit() {
    this._srv.getRepCombo().subscribe(result => this.Reps = result);
    this._srv.getTrans().subscribe(result => this.PageTran = result);
    this.clearModel();
  }
  prevPage() {
    this._srv.getTransUrl(this.PageTran.prev_page_url).subscribe(result=>this.PageTran = result);
  }

  nextPage() {
    this._srv.getTransUrl(this.PageTran.next_page_url).subscribe(result=>this.PageTran = result);
  }
  clearModel(){
    this.Tran = new Transaction();
    this.Tran.id = 0;
    let idrep = 0;
    this.Tran.representative_id = 1;

  }
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  saveTran(){
    this.saving = true;
    this._srv.saveTran(this.Tran).subscribe(result => {
      this._srv.getTrans().subscribe(result => this.PageTran = result);
      this.saving = false;
      this.clearModel();
    })
  }
  updateTran(tr:Transaction){
    this.Tran = tr;
  }
  deleteTran(id:number){
    this.saving = true;
    this._srv.deleteTran(id).subscribe(result => {
      this._srv.getTrans().subscribe(result => this.PageTran = result);
      this.saving = false;
      this.clearModel();
      console.log(result);
    });
  }

}
