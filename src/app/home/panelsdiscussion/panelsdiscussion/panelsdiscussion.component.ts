import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';

@Component({
  selector: 'app-panelsdiscussion',
  templateUrl: './panelsdiscussion.component.html',
  styleUrls: ['./panelsdiscussion.component.css']
})
export class PanelsdiscussionComponent implements OnInit {

  constructor(private panelServices: CmsService) { }

  list: any[] = []
  apiURL: string = baseUrl.apiUrl
  getActiveDiscussion() {
    this.panelServices.getActiveDiscussion().subscribe((response: any) => {
      console.log(response)
      this.list = response.result
    }, (err: any) => {
      console.log(err)
    })
  }

  ngOnInit(): void {
    this.getActiveDiscussion()
  }

}
