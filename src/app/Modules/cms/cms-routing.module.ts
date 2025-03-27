import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from 'src/app/guards/auth/auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent, canActivate: [authGuard],// Admin layout component
    children: [
      { path: 'register', component: RegisterComponent, canActivate: [authGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
      { path: 'home', component: AdminComponent, canActivate: [authGuard] },
      { path: 'gallery', loadChildren: () => import('./components-modules/gallery/gallery.module').then(m => m.GalleryModule), canActivate: [authGuard] },
      { path: 'exhibitors', loadChildren: () => import('./components-modules/exhibitors/exhibitors.module').then(m => m.ExhibitorsModule), canActivate: [authGuard] },
      { path: 'speakers', loadChildren: () => import('./components-modules/speakers/speakers.module').then((c) => c.SpeakersModule), canActivate: [authGuard] },
      { path: 'users', loadChildren: () => import('./components-modules/users/users.module').then((c) => c.UsersModule), canActivate: [authGuard] },
      { path: 'workshops', loadChildren: () => import('./components-modules/workshops/workshops.module').then((c) => c.WorkshopsModule), canActivate: [authGuard] },
      { path: 'visitors', loadChildren: () => import('./components-modules/visitors/visitors.module').then((c) => c.VisitorsModule), canActivate: [authGuard] },
      { path: 'wallofhonor', loadChildren: () => import('./components-modules/wallofhonor/wallofhonor.module').then((c) => c.WallofhonorModule), canActivate: [authGuard] },
      { path: 'panelsdiscussion', loadChildren: () => import('./components-modules/panelsdiscussion/panelsdiscussion.module').then((c) => c.PanelsdiscussionModule), canActivate: [authGuard] },
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
