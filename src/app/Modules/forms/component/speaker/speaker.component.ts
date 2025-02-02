import { Component, HostListener, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SpeakerService } from 'src/app/services/forms/speaker/speaker.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
  isMobile = true;
  isScrolled = false;

  isLoading: boolean = false;

  constructor(private observer: BreakpointObserver, private speakerServices: SpeakerService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 150;
  }

  file: any;
  uploadImage(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
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

  onInputChange(event: any): void {
    const value = event.target.value;
    // Remove any non-numeric characters
    event.target.value = value.replace(/[^0-9]/g, '');
  }

  
  async addSpeaker(form: any) {
    this.isLoading = true;
    console.log(form.value)
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
    reqBody.status = 'Pending'
    if (this.file) {
      const base64Image = await this.convertToBase64(this.file);
      reqBody.photo_path = base64Image
    }
    console.log("addSpeaker: ", reqBody)
    this.speakerServices.addSpeaker(reqBody).subscribe((response: any) => {
      console.log("addSpeaker response : ", response)
      this.isLoading = false;
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
      })
    }, (err: any) => {
      console.log("addSpeaker err : ", err)
      this.isLoading = false;
    })
  }

  ngOnInit(): void {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
