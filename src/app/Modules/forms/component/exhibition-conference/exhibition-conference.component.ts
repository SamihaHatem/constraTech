import { Component, HostListener, TemplateRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-exhibition-conference',
  templateUrl: './exhibition-conference.component.html',
  styleUrls: ['./exhibition-conference.component.css']
})
export class ExhibitionConferenceComponent {
  isMobile = true;

  isScrolled = false;

  ploicy!: boolean
  constructor(private observer: BreakpointObserver, private modalServices: NgbModal) { }

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

  onModal(content: TemplateRef<any>) {
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
