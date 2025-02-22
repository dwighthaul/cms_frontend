import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { AdminPageComponent } from './routes/admin-page/admin-page.component';
import { AlertPageComponent } from './routes/alert-page/alert-page.component';
import { BlogPageComponent } from './routes/blog-page/blog-page.component';
import { DynamicContentPageComponent } from './routes/dynamic-content-page/dynamic-content-page.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { RolePageComponent } from './routes/role-page/role-page.component';
import { UsersPagesComponent } from './routes/users-pages/users-pages.component';
import { AdminMenuComponent } from './shared/admin-menu/admin-menu.component';
import { DateFormatPipe } from './pipe/date-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    UsersPagesComponent,
    AboutPageComponent,
    RolePageComponent,
    BlogPageComponent,
    DynamicContentPageComponent,
    AdminPageComponent,
    AdminMenuComponent,
    LoginPageComponent,
    AlertPageComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
