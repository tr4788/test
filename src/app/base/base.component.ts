import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  constructor() {
    console.log('BaseComponent constructor');
  }
}
