import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AppPipe } from '../../app.pipe';

@Component({
  selector: 'app-page-story',
  templateUrl: './page-story.component.html',
  styleUrls: ['./page-story.component.scss']
})
export class PageStoryComponent implements OnInit {

  story: FirebaseListObservable<any>;

  constructor(
    private db: AngularFireDatabase,
  ) {

    this.story = db.list('/story').map(items => items.sort((a, b) => b.sort - a.sort)) as FirebaseListObservable<any[]>;
    
   }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
