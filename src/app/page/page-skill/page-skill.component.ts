import { Component, OnInit } from '@angular/core';
import { SkillComponent } from '../../home/skill/skill.component';

@Component({
  selector: 'app-page-skill',
  templateUrl: './page-skill.component.html',
  styleUrls: ['./page-skill.component.scss']
})
export class PageSkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
