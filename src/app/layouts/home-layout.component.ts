import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  template: `
    <app-sidebar></app-sidebar>
    <router-outlet></router-outlet>
  `,
  host: {
    class:'w-full h-full flex'
  },
  styles: []
})
export class HomeLayoutComponent {}
