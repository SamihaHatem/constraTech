import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTopicsComponent } from './main-topics/main-topics.component';


const routes: Routes = [
    { path: '', component: MainTopicsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class mainTopicsRoutingModule { }
