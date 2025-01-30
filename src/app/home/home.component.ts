import { AfterViewInit, Component, HostListener, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DomSanitizer, SafeHtml, Title } from '@angular/platform-browser';
import { UserI } from '../interfaces/user';
import { UserService } from '../services/user/user.service';
import { CmsService } from '../services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import { Router } from '@angular/router';

export interface Tile {
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMobile = true;
  currentUser!: UserI
  apiUrl: string = baseUrl.apiUrl




  youtube: any[] = [
    {
      title: 'ConstraTech 2024 - Haitham Elkott',
      iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/HRJoYP8C1fE?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Haitham Elkott" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
      title: 'ConstraTech 2024 - Fareed Mesallam',
      iframe: '<iframe width="702" height="393" src="https://www.youtube.com/embed/xjoc5njN-p8?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Fareed Mesallam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    // { 
    //   title: 'ConstraTech 2024 - Emad Fayez', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/vQg-njILgqc?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Emad Fayez" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Ehab Amr Abu Samra', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/MlXTruVeH34?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Ehab Amr Abu Samra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Dalia A.Ibrahim', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/HRJoYP8C1fE?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Dalia A.Ibrahim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Bassant Mohamed Kamal', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/CbXxw-RjNlM?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Bassant Mohamed Kamal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Mohamed Elsarha', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/Zgy6yUlKUCs?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Mohamed Elsarha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Mohamed Fawzy', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/fKDpowo7gjQ?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Mohamed Fawzy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Mohamed Saeed Ismail', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/oP0jo4CvuT8?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Mohamed Saeed Ismail" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Sara El-Gamal', 
    //   iframe: '<iframe width="702" height="379" src="https://www.youtube.com/embed/qmee9oYX138?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Sara El-Gamal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Mohamed Omar M.Helmy', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/fjluLfjHQ68?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Mohamed Omar M.Helmy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Assem Salah Abodeeb', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/jhxe311yS50?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Assem Salah Abodeeb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'Panel Discussion: Overview of new promising sustainable technologies', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/XsfoLKdkz7c?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="Panel Discussion: Overview of new promising sustainable technologies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Osama Othman', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/dPVVXPVsHIE?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Osama Othman" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // },
    // { 
    //   title: 'ConstraTech 2024 - Radwa Rostom', 
    //   iframe: '<iframe width="702" height="395" src="https://www.youtube.com/embed/m8ghjU1CiHM?list=PLrmYpV4_zwOj19eQ9MxF6OnWXwXY8pLSg" title="ConstraTech 2024 - Radwa Rostom" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' 
    // }
  ];

  constructor(private modalServices: NgbModal, private observer: BreakpointObserver, private sanitizer: DomSanitizer,
    private userServices: UserService, private contentServices: CmsService, private router: Router) {
    userServices.user$.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser)
    })
  }

  sanitizer_video(html: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html)
  }

  isScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 0;
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

  isNavOpen = false;

  closeNav() {
    this.isNavOpen = false;
  }
  
  scrollToId(id: string) {
    if (!this.router.url.includes('home/content'))
      this.router.navigateByUrl('/home/content')
    this.closeNav()
    console.log("element id : ", id, window.pageYOffset);
    if (window.pageYOffset == 0) window.scrollTo({
      top: 155,
      behavior: "instant",
    });
    setTimeout(() => {
      const element = document.getElementById(id);
      const fixednavHeight = document.getElementById('fixed-nav-id')?.offsetHeight || 300;
      console.log("nav fixednavHeight: ", fixednavHeight);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - fixednavHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Get the element after the first scroll
        console.log("Element after scroll: ", element);
      }
    }, 300); // Adjust delay time (300ms is just an example)
  }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }


}
