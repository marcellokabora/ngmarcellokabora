import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  private skill_style = [
    { name: 'css', percent: '100'},
    { name: 'sass', percent: '100'},
    { name: 'less', percent: '100'},
    { name: 'boostrap', percent: '100'},
    { name: 'semantic', percent: '100'},
    { name: 'foundation', percent: '100'},
    { name: 'material', percent: '100'},
    { name: 'freewall', percent: '100'},
    { name: 'isotope', percent: '100'},
    { name: 'flickity', percent: '100'},
    { name: 'animate', percent: '100'},
    { name: 'wow', percent: '100'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
