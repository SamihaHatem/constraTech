import { Component, OnInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms/cms.service';
import { baseUrl } from 'src/baseUrl';

@Component({
  selector: 'app-wallofhonor',
  templateUrl: './wallofhonor.component.html',
  styleUrls: ['./wallofhonor.component.css']
})
export class WallofhonorComponent implements OnInit {

  isLoading: boolean = true
  isError: boolean = false
  apiUrl = baseUrl.apiUrl
  constructor(private honorsServices: CmsService) { }

  honorsList: any[] = []
  getActiveHonors() {
    this.isLoading = true
    this.honorsServices.getActiveHonors().subscribe((response: any) => {
      this.isError = false
      this.isLoading = false
      console.log(response)
      this.honorsList = response.result
    }, (err: any) => {
      console.log(err)
      this.isError = true
      this.isLoading = false
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

  ngOnInit(): void {
    this.getActiveHonors()
  }

}
