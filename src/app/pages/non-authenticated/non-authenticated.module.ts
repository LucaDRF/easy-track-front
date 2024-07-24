import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  LoginComponent,
  RegisterComponent
} from '.';
import { LoadingComponent } from '../../shared';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LoadingComponent,
    ReactiveFormsModule
  ],

  providers: []
})
export class NonAuthenticatedModule { }
