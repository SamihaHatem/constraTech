import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userServices: UserService) { }

  login(formValue: any) {
    console.log(formValue)
    this.userServices.login(formValue);
  }
}
