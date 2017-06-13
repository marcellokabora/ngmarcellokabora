import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-form-work',
  templateUrl: './form-work.component.html',
  styleUrls: ['./form-work.component.scss']
})
export class FormWorkComponent implements OnInit {

  work: FormGroup;
  workid: string;
  photos: FirebaseListObservable<any>;
  cover: number=0;
  baseurl = environment.baseurl;
  loading = false;
  worktype = environment.worktype;
  idid:boolean=false;

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MdDialog, 
    public db: AngularFireDatabase,
  ) {

    this.work = fb.group({
      slider: [data.slider, [ ]],
      date: [data.date, [ ]],
      url: [data.url, [ ]],
      type: [data.type, [ ]],
      title: [data.title, [ ]],
      subtitle: [data.subtitle, [ ]],
      website: [data.website, [ ]],
      info: [data.info, [ ]],
    });
    
    if(data.id){
      this.workid=data.id;
      db.list('/work/'+this.workid).subscribe(items => {
          items.forEach(item => { 
            if(this.work.controls[item.$key]){
              this.work.controls[item.$key].setValue(item.$value);
            }
          })
      });
      this.photos = db.list('/work/'+this.workid+'/photo');      
    }else{
      db.list('/work').push({ slider: false }).then((item) => {
        this.workid=item.key;
      });
    }

    dialog.afterAllClosed.subscribe(() => {
      if(this.work.valid && this.idid==false){
        this.db.list('work').update(this.workid, {
          slider:this.work.controls['slider'].value,
          date:this.work.controls['date'].value,
          url:this.work.controls['url'].value,
          title:this.work.controls['title'].value,
          subtitle:this.work.controls['subtitle'].value,
          website:this.work.controls['website'].value,
          info:this.work.controls['info'].value,
          type:this.work.controls['type'].value,
        })
      }
    });
    

  }

  ngOnInit() {
  }

  upPhoto(event){
    let filetoupload = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    if(filetoupload.length>0){
      let totfile = filetoupload.length;
      let numbfile=0;
      this.loading = true;
        for (let uploadfile of filetoupload) {
          numbfile+=1;
          let rdn = Math.random().toString(36).slice(-10);
          let storageRef = firebase.storage().ref('/work/'+rdn);
          storageRef.put(uploadfile).then((photo) => {
            this.db.list('work/'+this.workid+'/photo').push({ id: rdn });
            if(numbfile == totfile){
              this.loading = false;
              this.photos = this.db.list('/work/'+this.workid+'/photo');      
            }
        });
      }
    }
  }

  myCover(id){
    this.db.list('work').update(this.workid, {
      cover: id
    })
  }


  imgDelete(photo){
    if(confirm("Delete this photo?")){
      firebase.storage().ref('/work/'+photo.id).delete().then((risp) => {
        this.db.list('/work/'+this.workid+'/photo').remove(photo.$key);
      })
    }
  }


  goDelete(){
    if(confirm("Delete this work?")){
      this.idid = true;
      this.db.list('/work/'+this.workid+'/photo').subscribe(items => {
          items.forEach(item => { 
            firebase.storage().ref('/event/'+item.id).delete();
          });
      });
      this.db.object('/work/'+this.workid).remove();
      this.dialog.closeAll();
    }
  }


}
