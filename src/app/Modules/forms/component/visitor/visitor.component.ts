import { Component, HostListener, TemplateRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VisitorService } from 'src/app/services/forms/visitor/visitor.service';
import Swal from 'sweetalert2';

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

  addVisitor(form: any) {
    console.log(form.value)
    this.visitorService.addVisitor(form.value).subscribe((response: any) => {
      console.log("addVisitor response : ", response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
      })
    }, (err: any) => {
      console.log("addVisitor err : ", err)
    })
  }

  myFatorahIsLoading: boolean = false;
  paymentMethods: any[] = []
  selectedPaymentMethod: any
  InitiatePayment(content: TemplateRef<any>) {
    this.myFatorahIsLoading = true;
    this.openModal(content)
    this.visitorService.InitiatePayment().subscribe((response: any) => {
      console.log(response)
      this.paymentMethods = response.Data.PaymentMethods;
      this.myFatorahIsLoading = false;
    }, (err: any) => {
      console.log(err)
    })
  }

  ExecutePayment() {
    this.visitorService.ExecutePayment(this.selectedPaymentMethod).subscribe((response: any) => {
      console.log(response)
      // window.open(response.Data.PaymentURL, "_blank");
    }, (err: any) => {
      console.log(err)
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
