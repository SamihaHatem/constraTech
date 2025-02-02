import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  isMobile = true;

  constructor(private observer: BreakpointObserver, private router: Router) { }

  scrollToId(id: string) {
    // console.log(this.router.url)
    if (!this.router.url.includes('home/content'))
      this.router.navigateByUrl('/home/content')
    // console.log("element id : ", id, window.pageYOffset);
    if (window.pageYOffset == 0) window.scrollTo({
      top: 155,
      behavior: "instant",
    });
    setTimeout(() => {
      const element = document.getElementById(id);
      const fixednavHeight = document.getElementById('fixed-nav-id')?.offsetHeight || 300;
      // console.log("nav fixednavHeight: ", fixednavHeight);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - fixednavHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Get the element after the first scroll
        // console.log("Element after scroll: ", element);
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
