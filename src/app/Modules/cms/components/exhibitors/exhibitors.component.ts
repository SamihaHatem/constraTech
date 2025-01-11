import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exhibitors',
  templateUrl: './exhibitors.component.html',
  styleUrls: ['./exhibitors.component.css']
})
export class ExhibitorsComponent implements OnInit {

  isLoading: boolean = true
  isError: boolean = false
  listOfExhibitors: any[] = []
  tempListOfExhibitors: any[] = []
  selectedExhibitor: any
  statusList: any[] = []
  classificationList: any[] = []
  FilterStatus: any

  constructor(private exhibitoServices: CmsService, private modalService: NgbModal) { }

  openModal(content: TemplateRef<any>, exhibitor?: any) {
    if (exhibitor) this.selectedExhibitor = exhibitor;
    this.modalService.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  onChangeFilter() {
    if (this.FilterStatus) {
      this.listOfExhibitors = this.tempListOfExhibitors.filter((exhibitor) => {
        return exhibitor.status == this.FilterStatus;
      })
    } else {
      this.listOfExhibitors = this.tempListOfExhibitors
    }
  }

  getAllExhibitors() {
    this.isLoading = true;
    this.isError = false;
    this.listOfExhibitors = [];
    this.tempListOfExhibitors = [];
    this.exhibitoServices.getAllExhibitors().subscribe((response: any) => {
      console.log("getAllExhibitors response: ", response)
      this.listOfExhibitors = response.result;
      this.tempListOfExhibitors = response.result;
      this.isLoading = false;
      this.isError = false;
      this.onChangeFilter();
    }, (err: any) => {
      console.log("getAllExhibitors err: ", err)
      this.isLoading = false;
      this.isError = true;
    })
  }

  updateExhibitor() {
    let reqBody = {
      exhibitor_id: this.selectedExhibitor._id,
      status: this.selectedExhibitor.status,
      classification: this.selectedExhibitor.classification
    }
    this.exhibitoServices.updateExhibitor(reqBody).subscribe((response: any) => {
      console.log("updateExhibitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllExhibitors();
      })
    }, (err: any) => {
      console.log("updateExhibitor err: ", err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllExhibitors();
      })
    })
  }

  addNewExhibitor(form: any) {
    console.log(form.value)
    this.exhibitoServices.addExhibitor(form.value).subscribe((response: any) => {
      console.log("addExhibitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        this.modalService.dismissAll();
        this.getAllExhibitors();
      })
    }, (err: any) => {
      console.log("addExhibitor err: ", err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        form.reset()
        this.modalService.dismissAll();
        this.getAllExhibitors();
      })
    })
  }

  ngOnInit(): void {
    this.getAllExhibitors();
    this.statusList = this.exhibitoServices.getExhibitorStatus();
    this.classificationList = this.exhibitoServices.getExhibitorClassifications();
  }
}
