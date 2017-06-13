import { Component } from '@angular/core';
import { MdDialog, MdDialogConfig, MdSnackBar } from "@angular/material";
import { AngularFireAuth } from 'angularfire2/auth';

import { FormLoginComponent } from './form/form-login/form-login.component';
import { FormWorkComponent } from './form/form-work/form-work.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imlogin: boolean = false;

  constructor(
    public afAuth: AngularFireAuth,
    public dialog: MdDialog,
    public snackBar: MdSnackBar
  ) { 
    afAuth.authState.subscribe(log => {
      if(log) {
        this.imlogin=true;
      } else {
        this.imlogin=false;
      }
    });
  }

  goLogin() {
    const config = new MdDialogConfig();
    this.dialog.open(FormLoginComponent, config);
  }
  goLogout(){
    this.afAuth.auth.signOut();
    this.snackBar.open('SEE YOU LATER', '', {
      duration: 2000,
    });
  }
  goWork(){
    let config: MdDialogConfig = { disableClose: false, data: {} };
    this.dialog.open(FormWorkComponent, config);
  }
  
}
