import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 300,
    navText: ['prev', 'next'],
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
