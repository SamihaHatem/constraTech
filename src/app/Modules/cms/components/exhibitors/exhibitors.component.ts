import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
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
  selectedExhibitorLogo: any
  statusList: any[] = []
  classificationList: any[] = []
  FilterStatus: any
  apiUrl: string = baseUrl.apiUrl

  constructor(private exhibitoServices: CmsService, private modalService: NgbModal) { }

  openModal(content: TemplateRef<any>, exhibitor?: any) {
    if (exhibitor) {
      this.selectedExhibitor = exhibitor;
      if (exhibitor.logo)
        this.selectedExhibitorLogo = this.apiUrl + exhibitor?.logo.slice(1)
    }
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

  file: any;
  async uploadImage(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);

    this.convertToBase64(this.file)
    this.selectedExhibitorLogo = await this.convertToBase64(this.file)
  }

  async updateExhibitor() {
    let reqBody = {
      ...this.selectedExhibitor,
      exhibitor_id: this.selectedExhibitor._id,
    }

    if (this.file) {
      const base64Image = await this.convertToBase64(this.file);
      reqBody.logo = base64Image
    }
    else delete reqBody.logo
    console.log(reqBody)
    this.exhibitoServices.updateExhibitor(reqBody).subscribe((response: any) => {
      console.log("updateExhibitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllExhibitors();
        this.file = null
      })
    }, (err: any) => {
      console.log("updateExhibitor err: ", err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalService.dismissAll();
        this.getAllExhibitors();
        this.file = null
      })
    })
  }

  base64Image!: any;
  base64String!: string;

  convertToBase64(file: any): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No file provided');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result
        resolve(reader.result as string);
      };
      reader.onerror = (error) => {
        reject('Error reading file: ' + error);
      };

      reader.readAsDataURL(file);
    });
  }


  async addNewExhibitor(form: any) {
    // const formData = new FormData();
    // formData.append('logo', this.file, this.file.name)
    // formData.append('classification', form.value.classification)
    // formData.append('company_name', form.value.company_name)
    // formData.append('email', form.value.email)
    // formData.append('fullname', form.value.fullname)
    // formData.append('mobile_no', form.value.mobile_no)
    // formData.append('position', form.value.position)
    // formData.append('status', form.value.status)
    // formData.append('website', form.value.website)
    console.log(form.value)
    console.log(this.file, this.convertToBase64(this.file))
    const base64Image = await this.convertToBase64(this.file);
    const reqBody = { ...form.value, logo: base64Image };
    console.log(reqBody)
    this.exhibitoServices.addExhibitor(reqBody).subscribe((response: any) => {
      console.log("addExhibitor response: ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        this.file = null
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
        this.file = null
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
