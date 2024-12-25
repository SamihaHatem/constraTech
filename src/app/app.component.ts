import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'constraTech';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  @ViewChild('videoPlayer') videoPlayer: any;
  autoPlayFlag = true;

  ngAfterViewInit() {
    // Check if video is muted and play it
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true; // Ensure video is muted
    videoElement.play();       // Trigger autoplay
  }

}
