import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

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

  ngOnInit(): void {
  }
}
