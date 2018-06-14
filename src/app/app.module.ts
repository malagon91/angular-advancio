import { MissingComponent } from './missing/missing.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {JsonpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module





import { AppComponent } from './app.component';
import { RepresentativeComponent } from './representative/representative.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomeComponent } from './home/home.component';
import { RepresentativeSvrService } from './representative-svr.service';
import { TransactionsService } from './transactions.service';

const appRoutes: Routes = [
  { path: 'representative', component: RepresentativeComponent },
  { path: 'transaction',      component: TransactionsComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: MissingComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MissingComponent,
    HomeComponent,
    RepresentativeComponent,
    TransactionsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {  } // <-- debugging purposes only
    ),
    BrowserModule,JsonpModule,HttpClientModule, HttpModule,FormsModule,Ng2OrderModule

  ],
  providers: [RepresentativeSvrService,TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
