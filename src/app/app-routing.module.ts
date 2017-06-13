import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

import { PageAboutComponent } from './page/page-about/page-about.component';
import { PageLangComponent } from './page/page-lang/page-lang.component';
import { PageSkillComponent } from './page/page-skill/page-skill.component';
import { PageBrandComponent } from './page/page-brand/page-brand.component';
import { PageWorksComponent } from './page/page-works/page-works.component';
import { ContactComponent } from './home/contact/contact.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: PageAboutComponent},
  { path: 'language', component: PageLangComponent},
  { path: 'skill', component: PageSkillComponent},
  { path: 'brand', component: PageBrandComponent},
  { path: 'project', component: PageWorksComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'message', component: MessageComponent},
  { path: ':work', component: WorkComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
