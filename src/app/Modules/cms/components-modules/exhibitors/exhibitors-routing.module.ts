import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';

const routes: Routes = [
  { path: '', component: ExhibitorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitorsRoutingModule { }
