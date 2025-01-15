import { Component, OnInit } from '@angular/core';
import { CmsService } from '../services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  apiUrl: string = baseUrl.apiUrl
  isMobile: boolean = true

  constructor(private contentServices: CmsService, private observer: BreakpointObserver) { }
  ngOnInit(): void {
    this.getActiveWorkshops();
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
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
}
