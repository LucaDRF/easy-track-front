import { Component } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  host: {
    class:'w-full'
  },
  styles: []
})
export class LoginLayoutComponent {}
