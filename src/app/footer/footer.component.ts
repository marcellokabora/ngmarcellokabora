import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  messForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public db: AngularFireDatabase,
  ) { 

    this.messForm = fb.group({
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
    
  }

  ngOnInit() {
  }

  goMess(event){
    if(this.messForm.valid){
      this.db.list('/message').push({ 
        message: this.messForm.controls['message'].value,
        datetime : Date.now()
      }).then((item) => {
        this.messForm.reset();
      });
    }
  }

}
