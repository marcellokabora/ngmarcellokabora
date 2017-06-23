import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { environment } from '../../../environments/environment';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  slideback:number=1;
  photos: FirebaseListObservable<any>;
  baseurl = environment.baseurl;
  workid;
  photolenght:number;


  constructor(
    private db: AngularFireDatabase,
    private dialog: MdDialog,
    @Inject(MD_DIALOG_DATA) public data: any,
  ) { 

    if(data.id){
      this.workid=data.id;
      this.photos = db.list('/work/'+this.workid+'/photo');
      this.photos.subscribe(snapshots => {this.photolenght = snapshots.length});
    }

  }

  goImg(){
    if(this.slideback==this.photolenght-1){
      this.slideback = 1;
    }else{
      this.slideback+=1;
    }
  }


  ngOnInit() {
  }

}
