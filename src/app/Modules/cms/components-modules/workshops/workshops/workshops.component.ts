import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit, OnDestroy {
  isLoading: boolean = true
  isError: boolean = false
  listOfworkshops: any[] = []
  tempListOfworkshops: any[] = []
  statusList: any[] = []
  selectedworkshop: any
  apiUrl: string = baseUrl.apiUrl


  constructor(private workshopsServices: CmsService, private modalService: NgbModal) { }
  ngOnDestroy(): void {
    this.newWorshopSubscription.unsubscribe();
    this.getAllworkshopsSubscription.unsubscribe();
    this.updateworkshopSubscription.unsubscribe();
  }

  openModal(content: TemplateRef<any>, workshop?: any) {
    if (workshop) this.selectedworkshop = workshop;
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  file: any
  uploadImage(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);
  }

  newWorshopSubscription: Subscription = new Subscription()
  newWorshop(form: any) {
    const formData = new FormData()
    formData.append("title", form.value.title)
    formData.append("file", this.file, this.file.name)
    formData.append("description", form.value.description)

    this.newWorshopSubscription = this.workshopsServices.addNewWorkshop(formData).subscribe((response: any) => {
      // console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalService.dismissAll();
        this.file = null;
        this.getAllworkshops();
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalService.dismissAll();
        this.file = null;
        this.getAllworkshops();
      })
    })
  }

  getAllworkshopsSubscription: Subscription = new Subscription()

  getAllworkshops() {
    this.isLoading = true;
    this.isError = false;
    this.listOfworkshops = [];
    this.getAllworkshopsSubscription = this.workshopsServices.getAllworkshops().subscribe((response: any) => {
      // console.log("getAllworkshops response: ", response)
      this.listOfworkshops = response.result;
      this.tempListOfworkshops = response.result;
      this.isLoading = false;
      this.isError = false;
    }, (err: any) => {
      console.log("getAllworkshops err: ", err)
      this.isLoading = false;
      this.isError = true;
    })
  }


  updateworkshopSubscription: Subscription = new Subscription()
  updateworkshop() {
    let reqBody = {
      _id: this.selectedworkshop._id,
      status: this.selectedworkshop.status,
      title: this.selectedworkshop.title,
      description: this.selectedworkshop.description,
    }
    this.updateworkshopSubscription = this.workshopsServices.updateworkshop(reqBody).subscribe((response: any) => {
      // console.log("updateExhibitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllworkshops();
      })
    }, (err: any) => {
      console.log("updateExhibitor err: ", err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllworkshops();
      })
    })
  }

  FilterStatus: any
  onChangeFilter() {
    // console.log(this.FilterStatus)
    if (this.FilterStatus) {
      this.listOfworkshops = this.tempListOfworkshops.filter((speaker) => {
        return speaker.status == this.FilterStatus
      })
    }
    else {
      this.listOfworkshops = this.tempListOfworkshops
    }
  }

  ngOnInit(): void {
    this.getAllworkshops()
    this.statusList = this.workshopsServices.getworkshopsStatus();
  }
}
