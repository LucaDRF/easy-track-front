import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Imports do Angular Material. Para não importar Modules desnecessários,
// é só descomentar o import a seguir e nos imports dentro do NgModule mais a abaixo conforme necessário
//

import { BrowserModule } from '@angular/platform-browser';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { NonAuthenticatedModule } from './pages';
import { SidebarComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginLayoutComponent
  ],

  imports: [
    SidebarComponent,
    BrowserModule,
    AppRoutingModule,
    NonAuthenticatedModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
