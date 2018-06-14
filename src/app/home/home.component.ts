import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';
import { Summary } from './../summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
 sum: Summary[];
 public chartType:string = 'bar';
 Chart:any;

 public chartDatasets:Array<any> = [
     {data: [], label: 'Sales data'},
 ];

 public chartLabels:Array<any> = [];

 public chartColors:Array<any> = [
     {
         backgroundColor: 'rgba(220,220,220,0.2)',
         borderColor: 'rgba(220,220,220,1)',
         borderWidth: 2,
         pointBackgroundColor: 'rgba(220,220,220,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(220,220,220,1)'
     },
     {
         backgroundColor: 'rgba(151,187,205,0.2)',
         borderColor: 'rgba(151,187,205,1)',
         borderWidth: 2,
         pointBackgroundColor: 'rgba(151,187,205,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(151,187,205,1)'
     }
 ];

 public chartOptions:any = {
     responsive: true
 };

  constructor( private _srv: SummaryService) { }

  ngOnInit() {
    this._srv.getSumm().subscribe(result => {
      this.sum = result;
      this.sum.forEach(item =>{
        this.chartDatasets[0].data.push(item.total);
        this.chartLabels.push(item.name);
      });
    });
  }

}
