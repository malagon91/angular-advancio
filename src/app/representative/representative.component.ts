import { Representative } from './../Representative';
import { RepresentativeSvrService } from './../representative-svr.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-representative',
  templateUrl: './representative.component.html',
  styleUrls: ['./representative.component.less']
})
export class RepresentativeComponent implements OnInit {
  Representatives: Representative[];
  Repr: Representative;
   //sorting
   key: string = 'name'; //set default
   reverse: boolean = false;
   saving: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
   }
  constructor(private _serv: RepresentativeSvrService) { }

  ngOnInit() {
    this._serv.getRepre().subscribe(result => this.Representatives = result);
    this.newRep();

  }
  updateRep(Rep: Representative){
    this.Repr = Rep;
  }
  newRep(){
    this.Repr = new Representative();
    this.Repr.id = 0;
  }
  saveRep(){
    this.saving = true;
    this._serv.saveRep(this.Repr).subscribe(result => {
      this._serv.getRepre().subscribe(result => this.Representatives = result);
      this.saving = false;
      this.newRep();
      console.log(result);

    })

  }
  deleteRep(Rep: Representative){
    this.saving = true;
    this._serv.deleteRep(Rep).subscribe(result => {
      this._serv.getRepre().subscribe(result => this.Representatives = result);
      this.saving = false;
      this.newRep();
      console.log(result);
    });
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
    }

}
