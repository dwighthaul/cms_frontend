import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './routes/about-page/about-page.component';
import { AdminPageComponent } from './routes/admin-page/admin-page.component';
import { AlertPageComponent } from './routes/alert-page/alert-page.component';
import { BlogPageComponent } from './routes/blog-page/blog-page.component';
import { DynamicContentPageComponent } from './routes/dynamic-content-page/dynamic-content-page.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { RolePageComponent } from './routes/role-page/role-page.component';
import { UsersPagesComponent } from './routes/users-pages/users-pages.component';
import { WelcomePageComponent } from './routes/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'alert', component: AlertPageComponent },
  { path: 'admin/users', component: UsersPagesComponent },
  { path: 'admin/role', component: RolePageComponent },
  { path: 'admin/blog', component: BlogPageComponent },
  { path: 'admin/dynamicContent', component: DynamicContentPageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
