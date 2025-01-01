import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { VisitorComponent } from './component/visitor/visitor.component';
import { SpeakerComponent } from './component/speaker/speaker.component';
import { ExhibitorComponent } from './component/exhibitor/exhibitor.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './component/login/login.component';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { SharePostComponent } from './component/share-post/share-post.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { RegisterComponent } from './component/register/register.component';

@NgModule({
  declarations: [
    VisitorComponent,
    SpeakerComponent,
    ExhibitorComponent,
    LoginComponent,
    SharePostComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule,
    AngularFormsModule,
    NgSelectModule
  ]
})
export class FormsModule { }
