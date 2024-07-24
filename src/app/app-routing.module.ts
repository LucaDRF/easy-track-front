import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';

import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';

import {
  LoginComponent,
  RegisterComponent
} from './pages';
import { CreateGroupsComponent, GroupComponent, HomeComponent, MyGroupsComponent } from './pages/authenticated';

const routes: Routes = [
  {
    path: 'groups',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'home',
      component: HomeComponent
    }, {
      path: 'my-groups',
      component: MyGroupsComponent
    }, {
      path: 'create-groups',
      component: CreateGroupsComponent
    }, {
      path: 'group',
      component: GroupComponent
    }]
  }, {
    path: 'auth',
    component: LoginLayoutComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
