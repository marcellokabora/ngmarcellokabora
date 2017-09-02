import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  private skill_software = [
    { name: 'brackets', percent: '100', link: "http://brackets.io/"},
    { name: 'vscode', percent: '100', link: "https://code.visualstudio.com//"},
    { name: 'illustrator', percent: '90', link: "http://www.adobe.com/products/illustrator.html/"},
    { name: 'photoshop', percent: '80', link: "http://www.adobe.com/products/photoshop.html/"},
    { name: 'indesign', percent: '70', link: "https://helpx.adobe.com/indesign.html/"},
    { name: 'animate', percent: '70', link: "http://www.adobe.com/products/animate.html/"},
    { name: 'affinity', percent: '80', link: "https://affinity.serif.com/en-gb/"},
    { name: 'imovie', percent: '80', link: "http://www.apple.com/lae/mac/imovie/"},
    { name: 'mamp', percent: '100', link: "https://www.mamp.info/en/"},
    { name: 'chrome', percent: '100', link: "https://developer.chrome.com/home/"},
    { name: 'excel', percent: '70', link: "https://office.live.com/start/excel.aspx"},
    { name: 'traktor', percent: '80', link: "https://www.native-instruments.com/en/products/traktor"},
    { name: 'ableton', percent: '90', link: "https://www.ableton.com/"},
    { name: 'skype', percent: '100', link: "https://www.skype.com/"},
    { name: 'inbox', percent: '100', link: "https://inbox.google.com/"},
    { name: 'mac', percent: '100', link: "http://www.apple.com/mac/"},
    { name: 'linux', percent: '70', link: "https://www.linux.com/what-is-linux/"},
    { name: 'windows', percent: '70', link: "https://www.microsoft.com/en-us/windows/"},
  ];

  private skill_style = [
    { name: 'css', percent: '100', link: "https://w3schools.com/css/"},
    { name: 'sass', percent: '100', link: "http://sass-lang.com/"},
    { name: 'less', percent: '100', link: "http://lesscss.org/"},
    { name: 'material', percent: '100', link: "https://material.angular.io/"},
    { name: 'boostrap', percent: '100', link: "http://getbootstrap.com/"},
    { name: 'semantic', percent: '100', link: "http://semantic-ui.com/"},
    { name: 'foundation', percent: '70', link: "http://foundation.zurb.com/"},
    { name: 'freewall', percent: '100', link: "http://kombai.github.io/freewall/"},
    { name: 'isotope', percent: '90', link: "http://isotope.metafizzy.co/"},
    { name: 'flickity', percent: '100', link: "http://flickity.metafizzy.co/"},
    { name: 'wow', percent: '100', link: "http://mynameismatthieu.com/WOW/"},
  ];
  
  private skill_script = [
    { name: 'html', percent: '90', link: "https://www.w3.org/markup/"},
    { name: 'javascript', percent: '90', link: "https://www.javascript.com/"},
    { name: 'angular', percent: '100', link: "https://angular.io/"},
    { name: 'rxjs', percent: '70', link: "http://reactivex.io/rxjs/"},
    { name: 'ionic', percent: '50', link: "https://ionicframework.com/"},
    { name: 'jquery', percent: '100', link: "https://jquery.com/"},
    { name: 'backbone', percent: '70', link: "http://backbonejs.org/"},
    { name: 'react', percent: '30', link: "https://facebook.github.io/react/"},
    { name: 'nodejs', percent: '70', link: "https://nodejs.org/en/"},
    { name: 'wordpress', percent: '100', link: "https://wordpress.com/"},
    { name: 'ogp', percent: '100', link: "http://ogp.me/"},
  ];

  private skill_database = [
    { name: 'firebase', percent: '90', link: "https://firebase.google.com/"},
    { name: 'php', percent: '80', link: "http://www.php.net/"},
    { name: 'mysql', percent: '90', link: "http://www.mysql.com/"},
    { name: 'json', percent: '100', link: "http://www.json.org/"},
    { name: 'xml', percent: '90', link: "http://www.xml.com/"},
    { name: 'git', percent: '90', link: "https://github.com/"},
    { name: 'analytics', percent: '70', link: "https://www.google.com/analytics/"},
    { name: 'sheets', percent: '60', link: "https://www.google.com/sheets/about/"},
  ];


  constructor() { }

  ngOnInit() {
  }

}
