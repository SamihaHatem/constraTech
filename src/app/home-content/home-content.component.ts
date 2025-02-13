import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from '../services/cms/cms.service';
import { UserService } from '../services/user/user.service';
import { Tile } from '../home/home.component';
import { baseUrl } from 'src/baseUrl';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit, AfterViewInit, OnDestroy {
  isMobile = true;
  autoPlayFlag = true;

  @ViewChild('videoPlayer') videoPlayer: any;

  classifications = [
    "Under Patronage", "Platinum Sponsor", "Gold Sponsor", "Silver Sponsor",
    "Bronze Sponsor", "Exhibitor", "Supporting Association", "Media Partner",
    "Academic Partner", "Visiting Partner"
  ];

  selectedVideo!: SafeHtml
  numberOfCols: number = 2;

  tiles: Tile[] = [
    { img: '' },
    { img: '' },
    { img: '' },
    { img: '' },
    { img: '' },
    { img: '' },
    { img: '' },
  ];
  apiUrl: string = baseUrl.apiUrl


  videoList: any[] = [
    {
      embed: '<iframe width="914" height="514" src="https://www.youtube.com/embed/SpBuvRoNOfQ?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Sherief Elabd - Oracle-Director, Global Industry &amp; Innovation Strategy- Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Sherief Elabd.jpg',
      title: 'Sherief Elabd - Oracle-Director, Global Industry & Innovation Strategy- Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/CLZXZUUUwIo?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="David Egan - UK - Review - CEO &amp; founder WIIG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/David Egan.jpg',
      title: 'David Egan - UK - Review - CEO & founder WIIG'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/YISZZgo4FJI?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constratech23 Riccardo Pagani - Italy - BIMON Italy - CEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Riccardo Pagani.jpg',
      title: 'Constratech23 Riccardo Pagani - Italy - BIMON Italy - CEO'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/hs5Jgh3t3zQ?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constratech23  Raphael Ani PMI Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Raphael Ani.jpg',
      title: 'Constratech23 Raphael Ani PMI Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/fSY1-hdBRrI?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="ConstraTech23   Jonson  Regional Director Middle east - Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Jonson Regional.jpg',
      title: 'ConstraTech23 Jonson Regional Director Middle east - Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/FGmPxzrLzow?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Omar Habib - Digital Delivery Manager - WIIgroup - UK- Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Omar Habib.jpg',
      title: 'Omar Habib - Digital Delivery Manager - WIIgroup - UK- Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/eZYiQ_rbpm4?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Karim Hisham- Trimble Regional Technical Manager- ConstrTech Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Karim Hisham.jpg',
      title: 'Karim Hisham- Trimble Regional Technical Manager- ConstrTech Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/naxj6ScyKWM?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Mahmoud Hafez- Area Business Manager- ConstrTech Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Mahmoud Hafez.jpg',
      title: 'Mahmoud Hafez- Area Business Manager- ConstrTech Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/2alRfyQVuWI?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Salah Omran - Senior Projects BIM Manager and Ass. Prof. at Helwan University- ConstraTech Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Salah Omran.jpg',
      title: 'Salah Omran - Senior Projects BIM Manager and Ass. Prof. at Helwan University- ConstraTech Review'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/-q7hsQr54yE?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews - (Gamal Eldin Abdelhafez)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/jamal Eldeen.jpg',
      title: 'Constra Tech 2024- Reviews - (Gamal Eldin Abdelhafez)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/CeCt5t8xyWA?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews -(Noha Elsayaad)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Noha Elsayaad.jpg',
      title: 'Constra Tech 2024- Reviews - (Noha Elsayaad)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/Js9kKncmEes?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews -(Amr Atef)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Amr Atef.jpg',
      title: 'Constra Tech 2024- Reviews -(Amr Atef)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/Ru5KIiF_7GU?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews - (Mariam Shalakany)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Mariam Shalakany.jpg',
      title: 'Constra Tech 2024- Reviews - (Mariam Shalakany)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/U7xpHOCFfjs?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews -(Sara Elgamal)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Sara Elgamal.jpg',
      title: 'Constra Tech 2024- Reviews -(Sara Elgamal)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/Yuik5jNiA74?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews -(Maged Farrag)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Maged Farrag.jpg',
      title: 'Maged Farrag'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/e_iRfwFP9cs?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews - (Mohamad Ezzeldin)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Mohamad Ezzeldin.jpg',
      title: 'Constra Tech 2024- Reviews - (Mohamad Ezzeldin)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/q6-hlPZ9xpk?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews -(Asem Salah)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Asem Salah.jpg',
      title: 'Constra Tech 2024- Reviews -(Asem Salah)'
    },
    {
      embed: '<iframe width="702" height="395" src="https://www.youtube.com/embed/qWKV2M2EXtg?list=PLrmYpV4_zwOiwSHFsqreyW8NwYrF25KFc" title="Constra Tech 2024- Reviews -(Sofia Guedes Vaz)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      img: '../../assets/images/videoImgs/Sofia Guedes Vaz.jpg',
      title: 'Constra Tech 2024- Reviews -(Sofia Guedes Vaz)'
    },
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
    center: true,
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

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    navSpeed: 300,
    navText: ['<', '>'],
    margin: 10,
    center: true,
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
      1000: {
        items: 3
      },
    },
    nav: true
  }


  speakersOptions: OwlOptions = {
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
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true,

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

  bannerVideoUrl: any
  constructor(private modalServices: NgbModal, private observer: BreakpointObserver, private sanitizer: DomSanitizer,
    private userServices: UserService, private contentServices: CmsService) {
    this.bannerVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/attgsABiEqg');

  }


  listOfGallery: any[] = []

  private HighightsImagesSubscription!: Subscription
  getHighightsImages() {
    this.HighightsImagesSubscription = this.contentServices.getHighightsImages().subscribe((response: any) => {
      // console.log("getHighightsImages: ", response)
      this.listOfGallery = response.result
      let count = 0
      for (let i = 0; i < this.listOfGallery.length; i++) {
        if (count >= 7) {
          break;
        }
        if (this.listOfGallery[i]) {
          this.tiles[i].img = baseUrl.apiUrl + this.listOfGallery[i];
          // console.log(i, this.listOfGallery[i])
          count++;
        }
      }
    }, (err: any) => {
      console.log(err)
    })
  }

  listOfSpeakers: any[] = []
  activeSpeakersSubscription !: Subscription
  getActiveSpeakers() {
    this.activeSpeakersSubscription = this.contentServices.getActiveSpeakers().subscribe((response: any) => {
      // console.log("getActiveSpeakers: ", response)
      this.listOfSpeakers = response.result;
    }, (err: any) => {
      console.log(err)
    })
  }


  openVideoModal(content: TemplateRef<any>, video: any) {
    // this.selectedVideo = this.sanitizer.bypassSecurityTrustHtml(video)
    const videoUrl = video.embed.match(/src="([^"]*)"/)[1]; // Extract the video URL
    this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
    this.modalServices.open(content, {
      centered: true
    })
  }


  listOfWorkShops: any[] = []
  activeWorkershopsSubscription !: Subscription
  getActiveWorkshops() {
    this.activeWorkershopsSubscription = this.contentServices.getActiveWorkshops().subscribe((response: any) => {
      // console.log(response)
      this.listOfWorkShops = response.result
    }, (err: any) => {
      console.log(err)
    })
  }

  listOfExhibitors: any[] = []
  groupedExhibitors: { [key: string]: any[] } = {};
  activeExhibitorsSubscription !: Subscription
  getActiveExhibitors() {
    this.activeExhibitorsSubscription = this.contentServices.getConfirmedExhibitors().subscribe((response: any) => {
      // console.log("getActiveExhibitors response: ", response)
      this.listOfExhibitors = response.result
      this.groupedExhibitors = this.listOfExhibitors.reduce((acc, exhibitor) => {
        if (!acc[exhibitor.classification]) {
          acc[exhibitor.classification] = [];
        }
        acc[exhibitor.classification].push(exhibitor);
        return acc;
      }, {});

      // console.log("groupedExhibitors: ", this.groupedExhibitors)

    }, (err: any) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getHighightsImages();
    this.getActiveWorkshops();
    this.getActiveSpeakers();
    this.getActiveExhibitors();

    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
        this.numberOfCols = 2;
      } else {
        this.isMobile = false;
        this.numberOfCols = 3;
      }
    });
  }

  ngAfterViewInit() {
    const videoElement = this.videoPlayer.nativeElement;
    videoElement.muted = true;
    videoElement.play();
  }

  ngOnDestroy(): void {
    if (this.HighightsImagesSubscription) this.HighightsImagesSubscription.unsubscribe();
    if (this.activeSpeakersSubscription) this.activeSpeakersSubscription.unsubscribe();
    if (this.activeWorkershopsSubscription) this.activeWorkershopsSubscription.unsubscribe();
    if (this.activeExhibitorsSubscription) this.activeExhibitorsSubscription.unsubscribe();
  }
}
