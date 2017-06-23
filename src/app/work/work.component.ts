import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../environments/environment';
import { MdDialog, MdDialogConfig } from "@angular/material";
import { Router, ActivatedRoute } from '@angular/router';

import { FormWorkComponent } from '../form/form-work/form-work.component';
import { ZoomComponent } from '../home/zoom/zoom.component';
import { AppPipe } from '../app.pipe';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  slideback:number = 1;
  works: FirebaseListObservable<any>;
  photos: FirebaseListObservable<any>;
  login:boolean;
  baseurl = environment.baseurl;
  workid;
  workey;
  photolenght:number;

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private dialog: MdDialog,
    private router: Router,
    private route:ActivatedRoute,
  ) {
    afAuth.authState.subscribe(log => {if(log) {this.login=true;} else {this.login=false;}});
    this.workid = this.route.snapshot.params['work'];
    this.works = db.list('/work/', {
      query: {
        orderByChild: 'url',
        equalTo: this.workid
      }
    })
    this.works.subscribe(items => {
      this.workey = items[0].$key;
      this.photos = db.list('/work/'+this.workey+'/photo');
      this.photos.subscribe(snapshots => {this.photolenght = snapshots.length});
    });

  }

  ngOnInit() {
    window.scroll(0, 0);
  }

  goWork(id){
    let config: MdDialogConfig = { disableClose: false, data: {id: id} };
    this.dialog.open(FormWorkComponent, config);
  }

  goZoom(id){
    let config: MdDialogConfig = { disableClose: false, data: {id: this.workey} };
    this.dialog.open(ZoomComponent, config);
  }

  goImg(){
    if(this.slideback==this.photolenght-1){
      this.slideback = 1;
    }else{
      this.slideback+=1;
    }
  }

}
