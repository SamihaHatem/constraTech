import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallofhonorRoutingModule } from './wallofhonor-routing.module';
import { WallofhonorComponent } from './wallofhonor/wallofhonor.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    WallofhonorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    MatMenuModule,
    WallofhonorRoutingModule
  ]
})
export class WallofhonorModule { }
