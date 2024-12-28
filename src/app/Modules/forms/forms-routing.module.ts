import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './component/visitor/visitor.component';
import { SpeakerComponent } from './component/speaker/speaker.component';
import { ExhibitorComponent } from './component/exhibitor/exhibitor.component';
import { LoginComponent } from './component/login/login.component';
import { ExhibitionConferenceComponent } from './component/exhibition-conference/exhibition-conference.component';
import { SharePostComponent } from './component/share-post/share-post.component';
import { redirectGuard } from 'src/app/guards/redirect/redirect.guard';

const routes: Routes = [
  { path: "forms/visitor", component: VisitorComponent },
  { path: "forms/speaker", component: SpeakerComponent },
  { path: "forms/exhibitor", component: ExhibitorComponent },
  { path: "forms/Exhibition&ConferenceRegisteration", component: ExhibitionConferenceComponent },
  { path: "share/:title/:image", component: SharePostComponent },
  { path: "login", component: LoginComponent, canActivate: [redirectGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
