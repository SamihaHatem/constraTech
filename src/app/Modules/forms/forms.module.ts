import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { VisitorComponent } from './component/visitor/visitor.component';
import { SpeakerComponent } from './component/speaker/speaker.component';
import { ExhibitorComponent } from './component/exhibitor/exhibitor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VisitorComponent,
    SpeakerComponent,
    ExhibitorComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }
