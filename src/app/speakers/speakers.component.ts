import { Component, OnInit } from '@angular/core';
import { CmsService } from '../services/cms/cms.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { baseUrl } from 'src/baseUrl';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  isMobile: boolean = true;
  apiUrl: string = baseUrl.apiUrl

  constructor(private contentServices: CmsService, private observer: BreakpointObserver) { }


  listOfSpeakers: any[] = []
  getActiveSpeakers() {
    this.contentServices.getActiveSpeakers().subscribe((response: any) => {
      console.log(response)
      this.listOfSpeakers = response.result;

    }, (err: any) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getActiveSpeakers();

    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;

      } else {
        this.isMobile = false;

      }
    });
  }
}
