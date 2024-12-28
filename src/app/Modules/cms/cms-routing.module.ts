import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from 'src/app/guards/auth/auth.guard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  // { path: 'admin/home', component: HomeComponent, canActivate: [authGuard] },
  // { path: 'admin/gallery', component: GalleryComponent, canActivate: [authGuard] },
  // { path: 'admin/sponsors', component: SponsorsComponent, canActivate: [authGuard] },
  // { path: 'admin/speakers', component: SpeakersComponent, canActivate: [authGuard] },

  {
    path: 'admin',
    component: HomeComponent, canActivate: [authGuard],// Admin layout component
    children: [
      { path: 'home', component: AdminComponent,canActivate: [authGuard] },
      { path: 'gallery', component: GalleryComponent ,canActivate: [authGuard] },
      { path: 'sponsors', component: SponsorsComponent, canActivate: [authGuard] },
      { path: 'speakers', component: SpeakersComponent,canActivate: [authGuard]  },
      { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Default child route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
