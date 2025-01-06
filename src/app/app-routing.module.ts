import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { WorkshopsComponent } from './workshops/workshops.component';
import { GalleryComponent } from './gallery/gallery.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
  anchorScrolling: 'enabled', // Enables fragment scrolling
};

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'speakers', component: SpeakersComponent },
      { path: 'content', component: HomeContentComponent },
      { path: 'workshops', component: WorkshopsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: '', redirectTo: 'content', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
