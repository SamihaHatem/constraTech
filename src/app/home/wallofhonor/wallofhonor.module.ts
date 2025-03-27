import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WallofhonorComponent } from './wallofhonor/wallofhonor.component';
import { wallofhonorRoutingModule } from './wallofhonor-routing.module';



@NgModule({
  declarations: [
    WallofhonorComponent
  ],
  imports: [
    CommonModule,
    wallofhonorRoutingModule
  ]
})
export class WallofhonorModule { }
