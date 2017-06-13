import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../../home/about/about.component';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
