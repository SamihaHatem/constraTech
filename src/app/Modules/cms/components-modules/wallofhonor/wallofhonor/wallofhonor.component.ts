import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wallofhonor',
  templateUrl: './wallofhonor.component.html',
  styleUrls: ['./wallofhonor.component.css']
})
export class WallofhonorComponent implements OnInit {

  isLoading: boolean = true
  isError: boolean = false
  honorsList: any[] = []
  apiUrl = baseUrl.apiUrl
  constructor(private honorsServices: CmsService, private modalServices: NgbModal,) { }

  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  file: any
  uploadImage(event: any) {
    this.file = event.target.files[0];
  }

  newHonor(form: any) {
    console.log(form.value)
    const formData = new FormData()
    formData.append('name', form.value.h_name)
    formData.append('url', form.value.url)
    formData.append('status', form.value.status)
    formData.append('file', this.file, this.file.name)

    this.honorsServices.newHonor(formData).subscribe((response: any) => {
      console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        this.getAllHonors()
        this.modalServices.dismissAll()
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        form.reset()
        this.getAllHonors()
        this.modalServices.dismissAll()
      })
    })
  }

  isImageOrVideo(path: string): string {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'];
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.mkv'];

    const ext = path.toLowerCase().slice(((path.lastIndexOf('.') - 1) >>> 0) + 2); // Get the file extension

    if (imageExtensions.includes(`.${ext}`)) {
      return 'image';
    } else if (videoExtensions.includes(`.${ext}`)) {
      return 'video';
    } else {
      return 'unknown';
    }
  }

  updateHonor(id: any, status: any) {
    this.honorsServices.updateHonor(id, { status }).subscribe((response: any) => {
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.getAllHonors()
        this.modalServices.dismissAll()
      })
    }, (err: any) => {
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.getAllHonors()
        this.modalServices.dismissAll()
      })
    })
  }

  getAllHonors() {
    this.isLoading = true
    this.isError = false
    this.honorsServices.getAllHonors().subscribe((response: any) => {
      console.log(response)
      this.honorsList = response.result
      this.isLoading = false
      this.isError = false
    }, (err: any) => {
      console.log(err)
      this.isLoading = false
      this.isError = true
    })

  }

  ngOnInit(): void {
    this.getAllHonors()
  }
}
