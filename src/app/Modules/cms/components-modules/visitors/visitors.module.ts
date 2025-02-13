import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsRoutingModule } from './visitors-routing.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgSelectModule } from '@ng-select/ng-select';
import { VisitorsComponent } from './visitors/visitors.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    VisitorsComponent
  ],
  imports: [
    CommonModule,
    VisitorsRoutingModule,
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
export class VisitorsModule { }
