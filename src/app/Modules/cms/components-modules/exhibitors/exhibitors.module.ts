import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExhibitorsRoutingModule } from './exhibitors-routing.module';
import { ExhibitorsComponent } from './exhibitors/exhibitors.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ExhibitorsComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MatMenuModule,
    ExhibitorsRoutingModule,


    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
  ]
})
export class ExhibitorsModule { }
