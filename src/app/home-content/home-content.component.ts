import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from '../services/cms/cms.service';
import { UserService } from '../services/user/user.service';
import { Tile } from '../home/home.component';
import { baseUrl } from 'src/baseUrl';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, AfterViewInit {
  isMobile = true;
  autoPlayFlag = true;

  @ViewChild('videoPlayer') videoPlayer: any;


  selectedVideo!: SafeHtml
  numberOfCols: number = 2;

  tiles: Tile[] = [];
  apiUrl: string = baseUrl.apiUrl

  originalTiles: Tile[] = [
    { img: '../../assets/images/conference/1.jfif', cols: 1, rows: 6 },
    { img: '../../assets/images/conference/2.jpg', cols: 1, rows: 2 },
    { img: '../../assets/images/conference/3.jpg', cols: 1, rows: 2 },
    { img: '../../assets/images/conference/4.webp', cols: 1, rows: 2 },
    { img: '../../assets/images/conference/5.webp', cols: 1, rows: 2 },
    { img: '../../assets/images/conference/6.webp', cols: 1, rows: 2 },
    { img: '../../assets/images/conference/7.jfif', cols: 1, rows: 2 },
  ]

  MobileTiles: Tile[] = [
    { img: '../../assets/images/conference/1.jfif', cols: 2, rows: 1 },
    { img: '../../assets/images/conference/2.jpg', cols: 1, rows: 1 },
    { img: '../../assets/images/conference/3.jpg', cols: 1, rows: 1 },
    { img: '../../assets/images/conference/4.webp', cols: 1, rows: 1 },
    { img: '../../assets/images/conference/5.webp', cols: 1, rows: 1 },
    { img: '../../assets/images/conference/6.webp', cols: 1, rows: 1 },
    { img: '../../assets/images/conference/7.jfif', cols: 1, rows: 1 },
  ]

  videoList: any[] = [
    {
      embed: '<iframe width="914" height="514" src="https://www.youtube.com/embed/HRJoYP8C1fE" title="ConstraTech 2024 - Haitham Elkott" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/1.png',
      title: 'ConstraTech 2024 - Haitham Elkott'
    },
    {
      embed: '<iframe width="917" height="514" src="https://www.youtube.com/embed/xjoc5njN-p8?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech2024 - Fareed Mesallam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/1.png',
      title: 'ConstraTech2024 - Fareed Mesallam'
    },
    {
      embed: '<iframe width="914" height="514" src="https://www.youtube.com/embed/vQg-njILgqc?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Emad Fayez" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/1.png',
      title: 'ConstraTech 2024 - Emad Fayez'
    }
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    navText: ['<', '>'],
    margin: 7,
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

  bannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    navText: ['<', '>'],
    margin: 7,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,

  }

  constructor(private modalServices: NgbModal, private observer: BreakpointObserver, private sanitizer: DomSanitizer,
    private userServices: UserService, private contentServices: CmsService) {

  }

  listOfGallery: any[] = []
  getActiveImages() {
    this.contentServices.getAllImages().subscribe((response: any) => {
      console.log(response)
      this.listOfGallery = response.result
      for (let i = 0; i < 7; i++) {
        if (this.listOfGallery[i]) {
          this.originalTiles[i].img = baseUrl.apiUrl + this.listOfGallery[i].filename;
          this.MobileTiles[i].img = baseUrl.apiUrl + this.listOfGallery[i].filename;
        }
      }
    }, (err: any) => {
      console.log(err)
    })
  }

  listOfSpeakers: any[] = [false, false, false]
  getActiveSpeakers() {
    this.contentServices.getActiveSpeakers().subscribe((response: any) => {
      console.log(response)
      for (let i = 0; i < 3; i++) {
        this.listOfSpeakers[i] = response.result[i];
      }
    }, (err: any) => {
      console.log(err)
    })
  }


  openVideoModal(content: TemplateRef<any>, video: any) {
    this.selectedVideo = this.sanitizer.bypassSecurityTrustHtml(video)
    this.modalServices.open(content, {
      size: 'xl',
      centered: true
    })
  }


  listOfWorkShops: any[] = []
  getActiveWorkshops() {
    this.contentServices.getActiveWorkshops().subscribe((response: any) => {
      console.log(response)
      this.listOfWorkShops = response.result
    }, (err: any) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getActiveImages();
    this.getActiveWorkshops();
    this.getActiveSpeakers();

    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
        this.tiles = this.MobileTiles;
        this.numberOfCols = 2;
      } else {
        this.isMobile = false;
        this.tiles = this.originalTiles;
        this.numberOfCols = 3;
      }
    });
  }

  ngAfterViewInit() {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true;
    videoElement.play();
  }
}
