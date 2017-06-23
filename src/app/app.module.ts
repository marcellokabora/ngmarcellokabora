import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule } from '@angular/material'; import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { MasonryModule } from 'angular2-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from './home/slide/slide.component';
import { AboutComponent } from './home/about/about.component';
import { LangComponent } from './home/lang/lang.component';
import { SkillComponent } from './home/skill/skill.component';
import { BrandComponent } from './home/brand/brand.component';
import { WorksComponent } from './home/works/works.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';
import { FormWorkComponent } from './form/form-work/form-work.component';
import { ContactComponent } from './home/contact/contact.component';
import { PageAboutComponent } from './page/page-about/page-about.component';
import { PageLangComponent } from './page/page-lang/page-lang.component';
import { PageSkillComponent } from './page/page-skill/page-skill.component';
import { PageWorksComponent } from './page/page-works/page-works.component';
import { PageBrandComponent } from './page/page-brand/page-brand.component';
import { FormLoginComponent } from './form/form-login/form-login.component';
import { ZoomComponent } from './home/zoom/zoom.component';
import { MessageComponent } from './message/message.component';
import { AppPipe } from './app.pipe';
import { PageStoryComponent } from './page/page-story/page-story.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent,
    AboutComponent,
    LangComponent,
    SkillComponent,
    BrandComponent,
    WorksComponent,
    WorksComponent,
    WorkComponent,
    FooterComponent,
    FormWorkComponent,
    ContactComponent,
    PageAboutComponent,
    PageLangComponent,
    PageSkillComponent,
    PageWorksComponent,
    PageBrandComponent,
    FormLoginComponent,
    ZoomComponent,
    MessageComponent,
    AppPipe,
    PageStoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    MdNativeDateModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MasonryModule
  ],
  entryComponents: [
    AppComponent,
    FormLoginComponent,
    FormWorkComponent,
    ZoomComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
