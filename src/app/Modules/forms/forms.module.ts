import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { VisitorComponent } from './component/visitor/visitor.component';
import { SpeakerComponent } from './component/speaker/speaker.component';
import { ExhibitorComponent } from './component/exhibitor/exhibitor.component';


@NgModule({
  declarations: [
    VisitorComponent,
    SpeakerComponent,
    ExhibitorComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
