import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelsdiscussionComponent } from './panelsdiscussion/panelsdiscussion.component';

const routes: Routes = [
  { path: '', component: PanelsdiscussionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelsdiscussionRoutingModule { }
