import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from 'src/app/guards/auth/auth.guard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExhibitorsComponent } from './components/exhibitors/exhibitors.component';
import { WorkshopsComponent } from './components/workshops/workshops.component';
import { RegisterComponent } from './components/register/register.component';
import { VisitorsComponent } from './components/visitors/visitors.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent, canActivate: [authGuard],// Admin layout component
    children: [
      { path: 'home', component: AdminComponent, canActivate: [authGuard] },
      { path: 'gallery', component: GalleryComponent, canActivate: [authGuard] },
      { path: 'exhibitors', component: ExhibitorsComponent, canActivate: [authGuard] },
      { path: 'speakers', component: SpeakersComponent, canActivate: [authGuard] },
      { path: 'users', component: UsersComponent, canActivate: [authGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
      { path: 'workshops', component: WorkshopsComponent, canActivate: [authGuard] },
      { path: 'register', component: RegisterComponent, canActivate: [authGuard] },
      { path: 'visitors', component: VisitorsComponent, canActivate: [authGuard] },
      { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Default child route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
