import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit, OnDestroy {
  isLoading: boolean = true
  isError: boolean = false
  listOfspeakers: any[] = []
  tempListOfspeakers: any[] = []
  statusList: any[] = []
  selectedSpeaker: any
  apiUrl: string = baseUrl.apiUrl
  FilterStatus: any
  FilterTopFive: any
  selectedSpeakerPhoto: any

  file: any;
  view: string = 'list'

  gridView() {
    this.view = 'grid'
  }

  listView() {
    this.view = 'list'
  }

  async uploadImage(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);

    this.convertToBase64(this.file)
    this.selectedSpeakerPhoto = await this.convertToBase64(this.file)
  }

  constructor(private speakersServices: CmsService, private modalService: NgbModal) { }
  ngOnDestroy(): void {
    this.getAllSpeakersSubscription.unsubscribe();
    this.newSpeakerSubscription.unsubscribe();
    this.updateSpeakerSubscription.unsubscribe();
  }

  openModal(content: TemplateRef<any>, speaker?: any) {
    if (speaker) {
      this.selectedSpeaker = speaker;
      this.selectedSpeakerPhoto = this.apiUrl + this.selectedSpeaker?.photo_path.slice(1)
    }
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  convertToBase64(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No file provided');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject('Error reading file: ' + error);
      };

      reader.readAsDataURL(file);
    });
  }

  onChangeFilter() {
    // console.log(this.FilterStatus)
    if (this.FilterStatus || this.FilterTopFive) {
      this.listOfspeakers = this.tempListOfspeakers.filter((speaker) => {
        const statusMatch = (this.FilterStatus) ? speaker.status == this.FilterStatus : true
        const topFiveMatch = (this.FilterTopFive) ? (this.FilterTopFive == 'true') ? speaker.top_five : !speaker.top_five : true
        return statusMatch && topFiveMatch
      })
    }
    else {
      this.listOfspeakers = this.tempListOfspeakers
    }
  }

  getAllSpeakersSubscription: Subscription = new Subscription()
  getAllSpeakers() {
    this.isLoading = true;
    this.isError = false;
    this.listOfspeakers = [];
    this.tempListOfspeakers = [];
    this.getAllSpeakersSubscription = this.speakersServices.getAllSpeakers().subscribe((response: any) => {
      // console.log("getAllSpeakers response: ", response)
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

  newSpeakerSubscription: Subscription = new Subscription()
  async addSpeaker(form: any) {
    // console.log(form.value)
    // const formData = new FormData();
    // formData.append('photo', this.file, this.file.name)
    // formData.append('email', form.value.email)
    // formData.append('fullname', form.value.fullname)
    // formData.append('mobile_no', form.value.mobile_no)
    // formData.append('position', form.value.position)
    // formData.append('facebook', form.value.facebook)
    // formData.append('linkedin', form.value.linkedin)
    // formData.append('bio', form.value.bio)
    // formData.append('company_name', form.value.company_name)
    // formData.append('website', form.value.website)
    // formData.append('speech_title', form.value.speech_title)
    // formData.append('speech_brief', form.value.speech_brief)
    // formData.append('top_five', form.value.top_five)

    let reqBody = { ...form.value }
    if (this.file) {
      const base64Image = await this.convertToBase64(this.file);
      reqBody.photo_path = base64Image
    }
    // console.log("addSpeaker: ", reqBody)
    this.newSpeakerSubscription = this.speakersServices.addSpeaker(reqBody).subscribe((response: any) => {
      // console.log("addSpeaker response : ", response)
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

  updateSpeakerSubscription: Subscription = new Subscription()
  async updateSpeaker() {
    let reqBody = {
      ...this.selectedSpeaker,
      speaker_id: this.selectedSpeaker._id,
    }

    if (this.file) {
      const base64Image = await this.convertToBase64(this.file);
      reqBody.photo_path = base64Image
    }
    else delete reqBody.photo_path

    // console.log("updateSpeaker : ", reqBody)
    this.updateSpeakerSubscription = this.speakersServices.updateSpeaker(reqBody).subscribe((response: any) => {
      // console.log("updateExhibitor response: ", response)
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
