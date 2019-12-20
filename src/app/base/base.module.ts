import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopMenuComponent } from './top-menu/top-menu.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { BaseComponent } from './base.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopMenuComponent, RightSideBarComponent, BaseComponent],
  exports: [TopMenuComponent, RightSideBarComponent, BaseComponent, CommonModule]
})

export class BaseModule { }
