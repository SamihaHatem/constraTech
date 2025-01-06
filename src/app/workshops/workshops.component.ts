import { Component, OnInit } from '@angular/core';
import { CmsService } from '../services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  apiUrl: string = baseUrl.apiUrl
  constructor(private contentServices: CmsService) { }
  ngOnInit(): void {
    this.getActiveWorkshops();
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
