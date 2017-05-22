import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material'; import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SlideComponent } from './home/slide/slide.component';
import { AboutComponent } from './home/about/about.component';
import { LangComponent } from './home/lang/lang.component';
import { SkillComponent } from './home/skill/skill.component';
import { BrandComponent } from './home/brand/brand.component';
import { WorksComponent } from './home/works/works.component';
import { LoginComponent } from './login/login.component';
import { WorkComponent } from './work/work.component';
import { FooterComponent } from './footer/footer.component';

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
    LoginComponent,
    WorksComponent,
    WorkComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  entryComponents: [
    AppComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
