import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

interface personI {
  name?: string,
  title?: string,
  photo?: string
}


@Component({
  selector: 'app-panelsdiscussion',
  templateUrl: './panelsdiscussion.component.html',
  styleUrls: ['./panelsdiscussion.component.css']
})
export class PanelsdiscussionComponent implements OnInit {
  isLoading: boolean = true
  isError: boolean = false
  honorsList: any[] = []
  apiUrl = baseUrl.apiUrl

  newperson: personI = {}
  newPersonsList: personI[] = []

  constructor(private discussionServices: CmsService, private modalServices: NgbModal,) { }


  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content, {
      centered: true,
      size: 'lg'
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

  personsNo: boolean = false
  addCount() {
    this.personsNo = true
  }

  panelTitle: any
  async newPanelDis(form: any) {
    const reqBody = { title: this.panelTitle, panelists: this.newPersonsList };

    this.discussionServices.newDiscussion(reqBody).subscribe((response: any) => {
      console.log(response)

      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.panelTitle = null
        this.personsNo = false
        this.newPersonsList = []
        this.newPersonImage = null
        this.newPersonName = null
        this.newPersonTitle = null
        this.modalServices.dismissAll()
        this.getALL()
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'error',
        icon: 'error'
      }).then(() => {
        this.panelTitle = null
        this.personsNo = false
        this.newPersonsList = []
        this.newPersonImage = null
        this.newPersonName = null
        this.newPersonTitle = null
        this.modalServices.dismissAll()
        this.getALL()
      })
    })
  }


  file: any;
  newPersonImage: any
  async uploadImage(event: any) {
    this.file = event.target.files[0];
    this.convertToBase64(this.file)
    this.newPersonImage = await this.convertToBase64(this.file)
  }

  newPersonName: any
  newPersonTitle: any
  addPersonToList() {
    this.newPersonsList.push({ name: this.newPersonName, photo: this.newPersonImage, title: this.newPersonTitle })
    this.personsNo = false
    this.newPersonName = null
    this.newPersonImage = null
    this.newPersonTitle = null
    console.log(this.newPersonsList)
  }


  panelsList: any[] = []
  getALL() {
    this.isLoading = true
    this.isError = false
    this.discussionServices.allDiscussion().subscribe((response: any) => {
      console.log(response)
      this.isLoading = false
      this.isError = false
      this.honorsList = response.result
    }, (err: any) => {
      console.log(err)
      this.isLoading = false
      this.isError = true
    })
  }

  updateDis(_id: any, status: any) {
    this.discussionServices.updateDisStatus(_id, { status }).subscribe((response: any) => {
      console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.getALL()
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'error',
        icon: 'error'
      }).then(() => {
        this.getALL()
      })
    })
  }

  ngOnInit(): void {
    this.getALL()
  }

}
