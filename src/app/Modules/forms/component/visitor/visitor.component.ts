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
    var res = await fetch('../../../../../assets/images/Screenshot 2024-12-28 205332.png');
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
    let reqBody = { fileName: 'asasasas', text: '123', imageBinary: img, access_token: "AQU3-53dgV20XxVV6ZmxITKEYbEur7-p1dxLz19GyaV8AzlUXNSqlbPLiC6jeBuIWWYu3LaBY5gOIg1OTNJqOX_tcuIeeNdBN6dg_g2YJi7wFAgHkHp6w0Vq2bZEgZR1QoTJxYw164KXuAuq0FYw7ZFkmgq1w-_H5lrMnNrBZT0lKx0MIRpP8dFxZ3spU3HVQ2V5UXQGqucEMOkzrVPUpWcQ_wty07rA45N-xSSoqT1Lb563e4tUmJXChxySk2rtKEyow7MpDlpT5cQHU0z0XfU24XZB4yLoOYuyVCDQ3JJC3RNMieZpIX1edjUgWFXK0jw9JMavO0uGNuwzjvIL1ytSDz4dJw" }
    console.log(reqBody)
    this.visitorService.shareToLinkedIn(reqBody).subscribe((response: any) => {
      console.log(response)
    }, (err: any) => {
      console.log(err)
    }) // access_token, text, imageBinary, fileName
  }

  addVisitor(form: any, stepper: MatStepper) {
    console.log(form.value)
    this.visitorService.addVisitor(form.value).subscribe((response: any) => {
      console.log("addVisitor response : ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        stepper.next();
      })
    }, (err: any) => {
      console.log("addVisitor err : ", err)
    })
  }

  cancel(stepper: MatStepper, content?: TemplateRef<any>) {
    stepper.next()
    if (content)
      setTimeout(() => {
        this.openModal(content)
      }, 100);
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
