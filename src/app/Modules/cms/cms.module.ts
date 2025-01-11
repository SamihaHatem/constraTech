import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { ExhibitorsComponent } from './components/exhibitors/exhibitors.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { VisitorsComponent } from './components/visitors/visitors.component';

@NgModule({
  declarations: [
    HomeComponent,
    GalleryComponent,
    SpeakersComponent,
    AdminComponent,
    ProfileComponent,
    UsersComponent,
    ExhibitorsComponent,
    WorkshopsComponent,
    VisitorsComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgSelectModule
  ]
})
export class CmsModule { }
