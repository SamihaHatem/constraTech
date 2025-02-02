import { Component, HostListener, TemplateRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitorService } from 'src/app/services/forms/visitor/visitor.service';
import Swal from 'sweetalert2';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent {
  isMobile = true;
  isScrolled = false;
  ploicy!: boolean
  isLoading: boolean = false
  constructor(private observer: BreakpointObserver, private modalServices: NgbModal, private visitorService: VisitorService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 150;
  }

  paymentModel = {
    payment: '',
    otherPayment: ''
  };

  // Payment options
  paymentOptions = [
    { label: 'Visa', value: 'Visa' },
    { label: 'Payment link', value: 'Payment link' },
    { label: 'Cash', value: 'Cash' },
    { label: 'Vodafone cash', value: 'Vodafone cash' }
  ];

  // Automatically select "Other" radio if text is entered
  onOtherInput() {
    if (this.paymentModel.otherPayment.trim()) {
      this.paymentModel.payment = 'Other';
    }
  }

  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  shareOnLinkedIn(modalTitle: string, modalImage: string): void {
    const postUrl =
      `http://192.168.137.1:4200/share/${encodeURIComponent(modalTitle)}/${encodeURIComponent(modalImage)}`
    console.log("postUrl-> ", postUrl)
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`;
    window.open(linkedInUrl, '_blank');
  }

  linkedinAuth() {
    this.visitorService.linkedinAuth().subscribe((response: any) => {
      console.log(response)
    }, (err: any) => {
      console.log(err)
    })
  }


  async img64() {
    var res = await fetch('../../../../../assets/images/Linkedin post.jpg');
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  async shareLinkedin() {
    const img = await this.img64()
    let reqBody = {
      fileName: 'constraTech', text: `Join me for four three of exclusive networking and discovery with global construction & design community at ConstraTech 2025. This year, enjoy new experiences, Conference, Exhibtions, workshops & talks. 
Register to get your badge now (registration Link)
See you there 25-26-27 May 2025
#constratech25 - #constratech`, imageBinary: img, access_token: "AQU3-53dgV20XxVV6ZmxITKEYbEur7-p1dxLz19GyaV8AzlUXNSqlbPLiC6jeBuIWWYu3LaBY5gOIg1OTNJqOX_tcuIeeNdBN6dg_g2YJi7wFAgHkHp6w0Vq2bZEgZR1QoTJxYw164KXuAuq0FYw7ZFkmgq1w-_H5lrMnNrBZT0lKx0MIRpP8dFxZ3spU3HVQ2V5UXQGqucEMOkzrVPUpWcQ_wty07rA45N-xSSoqT1Lb563e4tUmJXChxySk2rtKEyow7MpDlpT5cQHU0z0XfU24XZB4yLoOYuyVCDQ3JJC3RNMieZpIX1edjUgWFXK0jw9JMavO0uGNuwzjvIL1ytSDz4dJw"
    }
    console.log(reqBody)
    this.visitorService.shareToLinkedIn(reqBody).subscribe((response: any) => {
      console.log(response)
      this.shareLinkedin();
    }, (err: any) => {
      console.log(err)
    }) // access_token, text, imageBinary, fileName
  }

  addVisitor(form: any, stepper: MatStepper) {
    this.isLoading = true;
    form.value.mobile_no = '+2' + form.value.mobile_no;

    this.visitorService.addVisitor(form.value).subscribe((response: any) => {
      console.log("addVisitor response : ", response)
      this.isLoading = false;
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        stepper.next();
      })
    }, (err: any) => {
      console.log("addVisitor err : ", err)
      this.isLoading = false;
    })
  }

  newPayNowApi() {
    this.visitorService.paymentUrl().subscribe((response: any) => {
      console.log("newPayNowApi response: ", response)
      const url = response.link
      window.open(url, '_blank');
    }, (err: any) => {
      console.log("newPayNowApi err: ", err)
    })
  }

  cancel(stepper: MatStepper, content?: TemplateRef<any>) {
    stepper.next()
    if (content)
      setTimeout(() => {
        this.openModal(content)
      }, 100);
  }

  onInputChange(event: any): void {
    const value = event.target.value;
    // Remove any non-numeric characters
    event.target.value = value.replace(/[^0-9]/g, '');
  }

  shareOnFacebook() {
    const message = `Join me for four three of exclusive networking and discovery with global construction & design community at ConstraTech 2025. This year, enjoy new experiences, Conference, Exhibtions, workshops & talks. 
Register to get your badge now (registration Link)
See you there 25-26-27 May 2025
#constratech25 - #constratech`;
    const photoUrl = 'https://constratech.org/assets/images/Linkedin%20post.jpg';  // Replace with the URL of the photo
    this.visitorService.shareTextAndPhoto(message, photoUrl);
  }

  ngOnInit(): void {
    this.visitorService.facebookInit();
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
}
