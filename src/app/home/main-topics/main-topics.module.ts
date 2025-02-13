import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainTopicsRoutingModule } from './main-topics-routing.module';
import { MainTopicsComponent } from './main-topics/main-topics.component';

@NgModule({
  declarations: [MainTopicsComponent],
  imports: [
    CommonModule,
    mainTopicsRoutingModule
  ]
})
export class MainTopicsModule { }
