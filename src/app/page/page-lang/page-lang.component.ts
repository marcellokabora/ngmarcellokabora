import { Component, OnInit } from '@angular/core';
import { LangComponent } from '../../home/lang/lang.component';

@Component({
  selector: 'app-page-lang',
  templateUrl: './page-lang.component.html',
  styleUrls: ['./page-lang.component.scss']
})
export class PageLangComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
