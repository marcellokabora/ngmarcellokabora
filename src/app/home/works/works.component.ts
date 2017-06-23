import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';
import { MdDialog, MdDialogConfig } from "@angular/material";

import { FormWorkComponent } from '../../form/form-work/form-work.component';
import { ZoomComponent } from '../zoom/zoom.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  works: FirebaseListObservable<any>;
  login:boolean;
  baseurl = environment.baseurl;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private dialog: MdDialog
  ) {

    afAuth.authState.subscribe(log => {if(log) {this.login=true;} else {this.login=false;}});

    this.works = db.list('/work').map(items => items.sort((a, b) => b.date - a.date)) as FirebaseListObservable<any[]>;

    
  }

  ngOnInit() {
  }

  filterBy(type) {
    this.works = this.db.list('/work', {
      query: {
        orderByChild: 'type',
        equalTo: type
      }
    }).map(items => items.sort((a, b) => b.date - a.date)) as FirebaseListObservable<any[]>;
  }


  goWork(id){
    let config: MdDialogConfig = { disableClose: false, data: {id: id} };
    this.dialog.open(FormWorkComponent, config);
  }

  zoomWork(id){
    let config: MdDialogConfig = { disableClose: false, data: {id: id} };
    this.dialog.open(ZoomComponent, config);
  }



}
