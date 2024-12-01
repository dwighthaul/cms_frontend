import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
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
import { PageEditeurPageComponent } from './shared/components/page-editeur-page/page-editeur-page.component';
import { PageEditorComponent } from './shared/components/page-editor/page-editor.component';
import { UploadComponent } from './shared/components/upload/upload.component';



var toolbar = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  //[{ 'color': ["#998888"] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean'],                                         // remove formatting button

  ['link', 'image', 'video']                         // link and image, video
]

console.log("--------------------------")
QuillModule.forRoot().providers?.every((e) => {
  console.log(e.toLocaleString)
})
console.log("--------------------------")



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
    PageDisplayComponent,
    PageEditeurPageComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule.forRoot({
      modules: {
        //toolbar: toolbar
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
