import { Component, OnInit } from '@angular/core';
import { BrandComponent } from '../../home/brand/brand.component';

@Component({
  selector: 'app-page-brand',
  templateUrl: './page-brand.component.html',
  styleUrls: ['./page-brand.component.scss']
})
export class PageBrandComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
