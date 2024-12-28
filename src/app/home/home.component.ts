import { AfterViewInit, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { UserI } from '../interfaces/user';
import { UserService } from '../services/user/user.service';

export interface Tile {
  cols: number;
  rows: number;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  isMobile = true;
  @ViewChild('videoPlayer') videoPlayer: any;
  autoPlayFlag = true;

  currentUser!: UserI

  // exhibitReasons: Tile[] = [
  //   {
  //     text: 'SHOWCASE OFFERINGS',
  //     p: 'Showcase your services or launch products to a targeted audience of 20,000 professionals actively seeking your solutions',
  //     cols: 1,
  //     rows: 1,
  //     icon: '<i class="fa-regular fa-handshake"></i>'
  //   },

  //   {
  //     text: 'SHOWCASE OFFERINGS',
  //     p: 'Showcase your services or launch products to a targeted audience of 20,000 professionals actively seeking your solutions',
  //     cols: 1,
  //     rows: 1,
  //     icon: '<i class="fa-regular fa-handshake"></i>'
  //   },

  //   {
  //     text: 'SHOWCASE OFFERINGS',
  //     p: 'Showcase your services or launch products to a targeted audience of 20,000 professionals actively seeking your solutions',
  //     cols: 1,
  //     rows: 1,
  //     icon: '<i class="fa-regular fa-handshake"></i>'
  //   },

  //   {
  //     text: 'SHOWCASE OFFERINGS',
  //     p: 'Showcase your services or launch products to a targeted audience of 20,000 professionals actively seeking your solutions',
  //     cols: 1,
  //     rows: 1,
  //     icon: '<i class="fa-regular fa-handshake"></i>'
  //   },

  // ];

  videoList: any[] = [
    {
      embed: '<iframe width="914" height="514" src="https://www.youtube.com/embed/HRJoYP8C1fE" title="ConstraTech 2024 - Haitham Elkott" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/1.png',
      title: 'ConstraTech 2024 - Haitham Elkott'
    },
    {
      embed: '<iframe width="917" height="514" src="https://www.youtube.com/embed/xjoc5njN-p8?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech2024 - Fareed Mesallam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/2.png',
      title: 'ConstraTech2024 - Fareed Mesallam'
    },
    {
      embed: '<iframe width="914" height="514" src="https://www.youtube.com/embed/vQg-njILgqc?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Emad Fayez" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/3.png',
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

  tiles: Tile[] = [];

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

  numberOfCols: number = 2;

  constructor(private modalServices: NgbModal, private observer: BreakpointObserver, private sanitizer: DomSanitizer, private userServices: UserService) {
    userServices.user$.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser)
    })
  }

  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 0;
  }

  selectedVideo!: SafeHtml

  openVideoModal(content: TemplateRef<any>, video: any) {
    this.selectedVideo = this.sanitizer.bypassSecurityTrustHtml(video)
    this.modalServices.open(content, {
      size: 'xl',
      centered: true
    })
  }

  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content, {
      backdrop: 'static',
      keyboard: false,
      size: 'lg'
    })
  }

  scroll_Top() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;

        (this.isMobile) ? this.tiles = this.MobileTiles : this.tiles = this.originalTiles;
        (this.isMobile) ? this.numberOfCols = 2 : this.numberOfCols = 3;
      } else {
        this.isMobile = false;

        (this.isMobile) ? this.tiles = this.MobileTiles : this.tiles = this.originalTiles;
        (this.isMobile) ? this.numberOfCols = 2 : this.numberOfCols = 3;
      }
    });
  }

  ngAfterViewInit() {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true;
    videoElement.play();
  }
}
