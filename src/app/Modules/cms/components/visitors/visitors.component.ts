import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit {

  isLoading: boolean = true;
  isError: boolean = false;
  FilterStatus: any
  statusList: any[] = []
  listOfvisitors: any[] = []
  tempListOfvisitors: any[] = []
  selectedVisitor: any
  apiUrl: any = baseUrl.apiUrl

  constructor(private modalServices: NgbModal, private visitorsServicers: CmsService) { }

  openModal(content: TemplateRef<any>, visitor?: any) {
    this.selectedVisitor = visitor;
    this.modalServices.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  onChangeFilter() {
    // console.log(this.FilterStatus)
    if (this.FilterStatus) {
      this.listOfvisitors = this.tempListOfvisitors.filter((visitor) => {
        return visitor.status == this.FilterStatus
      })
    }
    else {
      this.listOfvisitors = this.tempListOfvisitors
    }
  }

  getAllVisitors() {
    this.visitorsServicers.getAllVisitors().subscribe((response: any) => {
      // console.log("getAllVisitors response: ", response)
      this.listOfvisitors = response.result;
      this.tempListOfvisitors = response.result;
      this.isLoading = false;
      this.isError = false;
    }, (err: any) => {
      console.log("getAllVisitors err: ", err)
      this.isLoading = false;
      this.isError = true;
    })
  }

  getVisitorsStatusList() {
    this.statusList = this.visitorsServicers.getVisitorsStatusList();
  }

  confirmVisitor(status: any, visitor_id: any) {
    const reqBody: { visitor_id: any, status?: any, payment?: any } = { visitor_id, status }
    // if (this.selectedVisitor.payment) reqBody.payment = this.selectedVisitor.payment
    // console.log(reqBody)

    this.visitorsServicers.confirmVisitor(reqBody).subscribe((response: any) => {
      // console.log("confirmVisitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalServices.dismissAll()
        this.getAllVisitors()
      })
    }, (err: any) => {
      console.log("confirmVisitor err: ", err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalServices.dismissAll()
        this.getAllVisitors()
      })
    })
  }

  ngOnInit(): void {
    this.getVisitorsStatusList();
    this.getAllVisitors();
  }
}
