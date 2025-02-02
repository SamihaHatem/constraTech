import { Component, HostListener } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ExhibitorService } from 'src/app/services/forms/exhibitor/exhibitor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exhibitor',
  templateUrl: './exhibitor.component.html',
  styleUrls: ['./exhibitor.component.css']
})
export class ExhibitorComponent {
  isMobile = true;
  isLoading: boolean = false;
  isScrolled = false;

  ploicy!: boolean
  constructor(private observer: BreakpointObserver, private exhibitorServices: ExhibitorService) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 150;
  }

  onInputChange(event: any): void {
    const value = event.target.value;
    // Remove any non-numeric characters
    event.target.value = value.replace(/[^0-9]/g, '');
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

  file: any;
  uploadImage(event: any) {
    this.file = event.target.files[0];
    // console.log(this.file);
  }
  base64Image!: string;
  base64String!: string;

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

  async addNewExhibitor(form: any) {
    this.isLoading = true;
    // console.log(form.value)
    // console.log(this.file, this.convertToBase64(this.file))
    const base64Image = await this.convertToBase64(this.file);
    const reqBody = { ...form.value, logo: base64Image };
    // console.log(reqBody)
    this.exhibitorServices.addExhibitor(reqBody).subscribe((response: any) => {
      // console.log("addExhibitor response: ", response)
      this.isLoading = false;
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        form.reset()
        this.file = null
      })
    }, (err: any) => {
      console.log("addExhibitor err: ", err)
      this.isLoading = false;
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        form.reset()
        this.file = null
      })
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
