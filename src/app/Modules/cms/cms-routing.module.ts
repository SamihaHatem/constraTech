import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from 'src/app/guards/auth/auth.guard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SpeakersComponent } from './components/speakers/speakers.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: 'admin',
    component: HomeComponent, canActivate: [authGuard],// Admin layout component
    children: [
      { path: 'home', component: AdminComponent,canActivate: [authGuard] },
      { path: 'gallery', component: GalleryComponent ,canActivate: [authGuard] },
      { path: 'sponsors', component: SponsorsComponent, canActivate: [authGuard] },
      { path: 'speakers', component: SpeakersComponent,canActivate: [authGuard]  },
      { path: 'users', component: UsersComponent,canActivate: [authGuard]  },
      { path: 'profile', component: ProfileComponent,canActivate: [authGuard]  },
      { path: '', redirectTo: 'admin', pathMatch: 'full' }, // Default child route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
