import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
