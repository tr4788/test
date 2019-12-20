import { Component } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  constructor() {
    console.log('TicketComponent constructor');
  }
}
