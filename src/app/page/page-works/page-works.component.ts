import { Component, OnInit } from '@angular/core';
import { WorksComponent } from '../../home/works/works.component';

@Component({
  selector: 'app-page-works',
  templateUrl: './page-works.component.html',
  styleUrls: ['./page-works.component.scss']
})
export class PageWorksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
