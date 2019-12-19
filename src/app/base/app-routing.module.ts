import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [{ path: '', canActivate: [AuthGuard], redirectTo: '', pathMatch: 'full', data: { isLoggedIn: true } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
