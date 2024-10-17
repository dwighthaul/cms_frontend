import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { AdminPageComponent } from './routes/admin-page/admin-page.component';
import { BlogPageComponent } from './routes/blog-page/blog-page.component';
import { DynamicContentPageComponent } from './routes/dynamic-content-page/dynamic-content-page.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { RolePageComponent } from './routes/role-page/role-page.component';
import { TempComponent } from './routes/temp/temp.component';
import { UsersPagesComponent } from './routes/users-pages/users-pages.component';
import { AdminMenuComponent } from './shared/admin-menu/admin-menu.component';
import { PageDisplayComponent } from './shared/components/page-display/page-display.component';
import { PageEditorComponent } from './shared/components/page-editor/page-editor.component';


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
    PageEditorComponent,
    TempComponent,
    PageDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //    QuillModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
