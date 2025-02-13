import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsComponent } from './workshops/workshops.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    WorkshopsComponent
  ],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgSelectModule,
    MatButtonModule,
    MatExpansionModule,
  ]
})
export class WorkshopsModule { }
