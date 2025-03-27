import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {

  isLoading: boolean = true
  isError: boolean = false
  ImagesList: any[] = []
  tempImagesList: any[] = []
  apiUrl: string = baseUrl.apiUrl
  FilterStatus: any
  file: any
  statusList: any[] = ['Inactive', 'Active']
  constructor(private modalServices: NgbModal, private galleryServices: CmsService) { }


  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  uploadImage(event: any) {
    this.file = event.target.files[0];
  }

  onChangeFilter() {
    if (this.FilterStatus) {
      this.ImagesList = this.tempImagesList.filter((image) => {
        return image.status == this.FilterStatus;
      })
    } else {
      this.ImagesList = this.tempImagesList;
    }
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

  newPhotoSubscription: Subscription = new Subscription()
  addPhoto() {
    const formData = new FormData();
    formData.append('file', this.file, this.file.name)
    this.newPhotoSubscription = this.galleryServices.addNewPhoto(formData).subscribe((response: any) => {
      // console.log('addPhoto response: ', response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalServices.dismissAll();
        this.file = null;
        this.getAllImages();
      })
    }, (err: any) => {
      console.log('addPhoto err: ', err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalServices.dismissAll();
        this.file = null;
        this.getAllImages();
      })
    })
  }

  allImagesSubscription: Subscription = new Subscription()
  getAllImages() {
    this.isLoading = true;
    this.isError = false;
    this.ImagesList = [];
    this.tempImagesList = [];
    this.allImagesSubscription = this.galleryServices.getAllImages().subscribe((response: any) => {
      // console.log("getAllImages response: ", response)
      this.ImagesList = response.result;
      this.tempImagesList = response.result;
      this.onChangeFilter();
      this.isLoading = false;
      this.isError = false;
    }, (err: any) => {
      console.log("getAllImages err: ", err)
      this.isLoading = false;
      this.isError = true;
    })
  }

  updateImageSubscription: Subscription = new Subscription()
  updateImageStatus(status: string, _id: string) {
    this.updateImageSubscription = this.galleryServices.updateImageStatus({ _id, status }).subscribe((response: any) => {
      // console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalServices.dismissAll()
        this.getAllImages();
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalServices.dismissAll()
        this.getAllImages();
      })
    })
  }

  updateImageStatusSubscription: Subscription = new Subscription()

  updateImageHighlight(highlight: any, _id: any) {
    // console.log({ _id, highlights:highlight })
    this.updateImageStatusSubscription = this.galleryServices.updateImageStatus({ _id, highlights: highlight }).subscribe((response: any) => {
      // console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalServices.dismissAll()
        this.getAllImages();
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalServices.dismissAll()
        this.getAllImages();
      })
    })
  }

  ngOnInit(): void {
    this.getAllImages();
  }

  ngOnDestroy(): void {
    this.newPhotoSubscription.unsubscribe();
    this.allImagesSubscription.unsubscribe();
    this.updateImageSubscription.unsubscribe();
    this.updateImageStatusSubscription.unsubscribe();
  }
}
