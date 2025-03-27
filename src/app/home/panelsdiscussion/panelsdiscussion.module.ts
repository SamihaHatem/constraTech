import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelsdiscussionComponent } from './panelsdiscussion/panelsdiscussion.component';
import { panelsdiscussionRoutingModule } from './panelsdiscussion-routing.module';



@NgModule({
  declarations: [
    PanelsdiscussionComponent
  ],
  imports: [
    CommonModule,
    panelsdiscussionRoutingModule
  ]
})
export class PanelsdiscussionModule { }
