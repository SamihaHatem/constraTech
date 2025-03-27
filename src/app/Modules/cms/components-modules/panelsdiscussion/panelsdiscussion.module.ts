import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelsdiscussionRoutingModule } from './panelsdiscussion-routing.module';
import { PanelsdiscussionComponent } from './panelsdiscussion/panelsdiscussion.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    PanelsdiscussionComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    FormsModule,
    NgSelectModule,
    PanelsdiscussionRoutingModule
  ]
})
export class PanelsdiscussionModule { }
