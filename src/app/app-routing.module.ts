import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Restores scroll position on navigation
  anchorScrolling: 'enabled', // Enables fragment scrolling
};

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'content', component: HomeContentComponent },
      { path: 'speakers', loadChildren: () => import('./home/speakers/speakers.module').then(m => m.SpeakersModule) },
      { path: 'workshops', loadChildren: () => import('./home/workshops/workshops.module').then(m => m.WorkshopsModule) },
      { path: 'gallery', loadChildren: () => import('./home/gallery/gallery.module').then(m => m.GalleryModule) },
      { path: 'main-topics', loadChildren: () => import('./home/main-topics/main-topics.module').then(m => m.MainTopicsModule) },
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
