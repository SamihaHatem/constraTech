import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopsComponent } from './workshops/workshops.component';
import { workshopsRoutingModule } from './workshops-routing.module';



@NgModule({
  declarations: [
    WorkshopsComponent
  ],
  imports: [
    CommonModule,
    workshopsRoutingModule
  ]
})
export class WorkshopsModule { }
