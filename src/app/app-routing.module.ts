import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../app/auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent, data: { isLoggedIn: true } },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then(t => t.TicketModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
