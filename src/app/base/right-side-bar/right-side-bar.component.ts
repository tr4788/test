import { Component } from '@angular/core';

@Component({
  selector: 'right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent {
  constructor() {
    console.log('RightSideBarComponent constructor');
  }

  onClick1() {
    console.log('onClick1 of RightSideBarComponent');
  }
}
