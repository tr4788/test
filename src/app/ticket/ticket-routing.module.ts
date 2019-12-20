import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketComponent } from './ticket.component';

const ticketRoutes: Routes = [
  {
    path: '',
    component: TicketComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ticketRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TicketRoutingModule { }
