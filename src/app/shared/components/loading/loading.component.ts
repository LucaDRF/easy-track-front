import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  imports: [NgStyle],
  standalone: true
})
export class LoadingComponent {
  protected style: {};

  @Input() width: string = '80px';
  @Input() height: string = '80px';

  constructor() {
    this.style = { width: this.width, height: this.height };
  }

}
