import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { MdDialog, MdDialogConfig } from "@angular/material";

import { FormWorkComponent } from '../../form/form-work/form-work.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  slideback:number=0;
  slidebacklenght=0;
  works: FirebaseListObservable<any>;
  baseurl = environment.baseurl;
  login:boolean;
  interval;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private dialog: MdDialog,
  ) {

    afAuth.authState.subscribe(log => {if(log) {this.login=true;} else {this.login=false;}});
    
    this.works = db.list('/work/', {
      query: {
        orderByChild: 'slider',
        equalTo: true
      }
    })

   }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.slideback+=1;
      if(this.slideback == 7){
        this.slideback = 0;
      }
    }, 5000);
  }

  noInterval(){
    clearInterval(this.interval);
  }

  goWork(id){
    let config: MdDialogConfig = { disableClose: false, data: {id: id} };
    this.dialog.open(FormWorkComponent, config);
  }


}
