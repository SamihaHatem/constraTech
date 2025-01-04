import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentuser!: UserI
  constructor(private usersServices: UserService) {
    usersServices.user$.subscribe((user) => {
      this.currentuser = user;
    })
  }

  ngOnInit(): void {
  }
}
