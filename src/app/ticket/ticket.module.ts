import { NgModule }       from '@angular/core';

import { TicketComponent } from './ticket.component';
import { TicketRoutingModule } from './ticket-routing.module';

@NgModule({
  imports: [
    TicketRoutingModule
  ],
  declarations: [
    TicketComponent
  ]
})
export class TicketModule {}
