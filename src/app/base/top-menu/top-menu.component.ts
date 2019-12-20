import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  constructor() {
    console.log('TopMenuComponent constructor');
  }

  onClick1() {
    console.log('onClick1 of TopMenuComponent');
  }
}
