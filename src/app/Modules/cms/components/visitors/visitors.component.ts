import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';

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
    console.log(this.FilterStatus)
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
      console.log("getAllVisitors response: ", response)
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

  confirmVisitor() {
    const formData = new FormData()
    formData.append('visitor_id', this.selectedVisitor._id)
    if (this.selectedVisitor.status) formData.append('status', this.selectedVisitor.status)
    if (this.selectedVisitor.payment) formData.append('payment', this.selectedVisitor.payment)
    console.log(formData)
    formData.forEach((v) => { console.log('v: ', v) }
  )

    this.visitorsServicers.confirmVisitor(formData).subscribe((response) => {
      console.log("confirmVisitor response: ", response)
    }, (err: any) => {
      console.log("confirmVisitor err: ", err)
    })
  }

  ngOnInit(): void {
    this.getVisitorsStatusList();
    this.getAllVisitors();
  }
}
