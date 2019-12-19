import { Component } from '@angular/core';

@Component({
  selector: 'right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent {
  title = 'demo';

  constructor() {
    console.log('test ne');
  }

  onClick1() {
    console.log('test ne 222');
  }
}
