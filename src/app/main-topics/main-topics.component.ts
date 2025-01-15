import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-topics',
  templateUrl: './main-topics.component.html',
  styleUrls: ['./main-topics.component.css']
})
export class MainTopicsComponent implements OnInit {

  isMobile: boolean = true
  constructor(private observer: BreakpointObserver) { }


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
