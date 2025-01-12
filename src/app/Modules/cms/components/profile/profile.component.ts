import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newPassword: any
  currentuser!: UserI
  constructor(private usersServices: UserService, private modalServices: NgbModal) {
    usersServices.user$.subscribe((user) => {
      this.currentuser = user;
      console.log(this.currentuser)
    })
  }

  openModal(content: TemplateRef<any>) {
    this.modalServices.open(content, {
      centered: true,
      size: 'lg'
    })
  }

  resetPasswordFn() {
    this.usersServices.resetPassword({ userId: this.currentuser._id, newPassword: this.newPassword }).subscribe((response: any) => {
      console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(() => {
        this.modalServices.dismissAll()
      })

    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(() => {
        this.modalServices.dismissAll()
      })
    })
  }

  ngOnInit(): void {
  }
}
