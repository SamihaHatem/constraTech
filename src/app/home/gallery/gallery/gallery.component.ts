import { Component, OnDestroy, OnInit } from '@angular/core';
import { CmsService } from '../../../services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  isMobile: boolean = true;
  apiUrl: string = baseUrl.apiUrl

  constructor(private contentServices: CmsService, private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.getActiveImages();
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  isImageOrVideo(path: string): string {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.mkv'];

    const ext = path.toLowerCase().slice(((path.lastIndexOf('.') - 1) >>> 0) + 2);

    if (imageExtensions.includes(`.${ext}`)) {
      return 'image';
    } else if (videoExtensions.includes(`.${ext}`)) {
      return 'video';
    } else {
      return 'unknown';
    }
  }


  private activeImagesSubscription!: Subscription;
  listOfGallery: any[] = []
  getActiveImages() {
    this.activeImagesSubscription = this.contentServices.getActiveImages().subscribe(
      (response: any) => {
        this.listOfGallery = response.result;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.activeImagesSubscription) {
      this.activeImagesSubscription.unsubscribe();
    }
  }

}
