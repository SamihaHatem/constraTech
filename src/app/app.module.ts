import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule as customFormsModule } from './Modules/forms/forms.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    customFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
