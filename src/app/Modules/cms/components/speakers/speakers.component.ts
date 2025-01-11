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


  file: any;
  uploadImage(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

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

  addSpeaker(form: any) {
    console.log(form.value)
    const formData = new FormData();
    formData.append('photo', this.file, this.file.name)
    formData.append('email', form.value.email)
    formData.append('fullname', form.value.fullname)
    formData.append('mobile_no', form.value.mobile_no)
    formData.append('position', form.value.position)
    formData.append('facebook', form.value.facebook)
    formData.append('linkedin', form.value.linkedin)
    formData.append('bio', form.value.bio)
    formData.append('company_name', form.value.company_name)
    formData.append('website', form.value.website)
    formData.append('speech_title', form.value.speech_title)
    formData.append('speech_brief', form.value.speech_brief)

    this.speakersServices.addSpeaker(formData).subscribe((response: any) => {
      console.log("addSpeaker response : ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        this.modalService.dismissAll();
        this.getAllSpeakers();
      })
    }, (err: any) => {
      console.log("addSpeaker err : ", err)
      this.modalService.dismissAll();
      this.getAllSpeakers();
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
