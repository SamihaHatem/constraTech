import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  isLoading: boolean = true
  isError: boolean = false
  listOfspeakers: any[] = []
  tempListOfspeakers: any[] = []
  statusList: any[] = []
  selectedSpeaker: any
  apiUrl: string = baseUrl.apiUrl
  FilterStatus: any

  constructor(private speakersServices: CmsService, private modalService: NgbModal) { }

  openModal(content: TemplateRef<any>, speaker?: any) {
    if (speaker) this.selectedSpeaker = speaker;
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  onChangeFilter() {
    console.log(this.FilterStatus)
    if (this.FilterStatus) {
      this.listOfspeakers = this.tempListOfspeakers.filter((speaker) => {
        return speaker.status == this.FilterStatus
      })
    }
    else {
      this.listOfspeakers = this.tempListOfspeakers
    }
  }

  getAllSpeakers() {
    this.isLoading = true;
    this.isError = false;
    this.listOfspeakers = [];
    this.tempListOfspeakers = [];
    this.speakersServices.getAllSpeakers().subscribe((response: any) => {
      console.log("getAllSpeakers response: ", response)
      this.listOfspeakers = response.result;
      this.tempListOfspeakers = response.result;
      this.isLoading = false;
      this.isError = false;
      this.onChangeFilter();
    }, (err: any) => {
      console.log("getAllSpeakers err: ", err)
      this.isLoading = false;
      this.isError = true;
      this.onChangeFilter();
    })
  }


  updateSpeaker() {
    let reqBody = {
      speaker_id: this.selectedSpeaker._id,
      status: this.selectedSpeaker.status,
    }
    this.speakersServices.updateSpeaker(reqBody).subscribe((response: any) => {
      console.log("updateExhibitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllSpeakers();
      })
    }, (err: any) => {
      console.log("updateExhibitor err: ", err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllSpeakers();
      })
    })
  }

  ngOnInit(): void {
    this.getAllSpeakers()
    this.statusList = this.speakersServices.getSpeakersStatus();
  }
}
