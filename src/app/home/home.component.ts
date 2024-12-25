import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor(private modalServices: NgbModal, config: NgbModalConfig,) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.size = 'lg'
  }

  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content,{
      
    })
  }

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
