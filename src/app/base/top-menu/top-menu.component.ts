import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  title = 'demo';

  constructor() {
    console.log('test ne');
  }

  onClick1() {
    console.log('test ne 222');
  }
}
