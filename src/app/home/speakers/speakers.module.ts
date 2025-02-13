import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { speakersRoutingModule } from './speakers-routing.modules';
import { SpeakersComponent } from './speakers/speakers.component';

@NgModule({
  declarations: [ SpeakersComponent],
  imports: [
    CommonModule,
    speakersRoutingModule
  ]
})
export class SpeakersModule { }
