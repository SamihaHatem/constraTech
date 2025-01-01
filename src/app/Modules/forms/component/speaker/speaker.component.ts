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

  addSpeaker(form: any) {
    console.log(form.value)
    const formData = new FormData();
    formData.append('photo_path', this.file, this.file.name)
    formData.append('email', form.value.email)
    formData.append('fullname', form.value.fullname)
    formData.append('mobile_no', form.value.mobile_no)
    formData.append('position', form.value.position)
    formData.append('facebook', form.value.facebook)
    formData.append('linkedin', form.value.linkedin)
    formData.append('bio', form.value.bio)
    formData.append('company_name', form.value.company_name)
    formData.append('website', form.value.website)
    formData.append('speech_title', form.value.speech_title)
    formData.append('speech_brief', form.value.speech_brief)

    this.speakerServices.addSpeaker(formData).subscribe((response: any) => {
      console.log("addSpeaker response : ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
      })
    }, (err: any) => {
      console.log("addSpeaker err : ", err)
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
