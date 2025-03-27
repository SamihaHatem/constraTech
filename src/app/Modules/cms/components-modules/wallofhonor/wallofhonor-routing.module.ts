import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WallofhonorComponent } from './wallofhonor/wallofhonor.component';

const routes: Routes = [
  { path: '', component: WallofhonorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WallofhonorRoutingModule { }
