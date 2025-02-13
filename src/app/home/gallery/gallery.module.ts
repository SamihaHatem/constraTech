import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { galleryRoutingModule } from './gallery-routing.module';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    galleryRoutingModule
  ]
})
export class GalleryModule { }
