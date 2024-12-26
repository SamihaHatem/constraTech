import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorComponent } from './component/visitor/visitor.component';
import { SpeakerComponent } from './component/speaker/speaker.component';
import { ExhibitorComponent } from './component/exhibitor/exhibitor.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: "forms/visitor", component: VisitorComponent },
  { path: "forms/speaker", component: SpeakerComponent },
  { path: "forms/exhibitor", component: ExhibitorComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
