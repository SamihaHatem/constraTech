import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule as customFormsModule } from './Modules/forms/forms.module';
import { HomeComponent } from './home/home.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './Modules/shared/shared.module';
import { CmsModule } from './Modules/cms/cms.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { loginUserReducer } from './store/reducers/user.reduer';
import { SpeakersComponent } from './speakers/speakers.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { WorkshopsComponent } from './workshops/workshops.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpeakersComponent,
    HomeContentComponent,
    WorkshopsComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    customFormsModule,
    MatMenuModule,
    MatButtonModule,
    NgbModule,
    SharedModule,
    CmsModule,
    MatGridListModule,
    HttpClientModule,
    StoreModule.forRoot({ user: loginUserReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
