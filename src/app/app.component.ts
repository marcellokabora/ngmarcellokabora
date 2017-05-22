import { Component } from '@angular/core';
import { MdDialog, MdDialogConfig, MdSnackBar } from "@angular/material";
import { AngularFireAuth } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';

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
      // if(log) {
      //   this.imlogin=true;
      // } else {
      //   this.imlogin=false;
      // }
    });
  }

  goLogin() {
    const config = new MdDialogConfig();
    this.dialog.open(LoginComponent, config);
  }
  
}
