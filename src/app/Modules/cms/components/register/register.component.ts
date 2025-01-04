import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private usersServices: UserService) {
  }


  onRegister(form: any) {
    console.log(form.value)
    this.usersServices.register(form.value).subscribe((response: any) => {
      console.log(response)
      Swal.fire({
        title: response.message,
        icon: 'success'
      }).then(()=>{
        form.reset();
      })
    }, (err: any) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        icon: 'error'
      }).then(()=>{
        form.reset();
      })
    })
  }

  ngOnInit(): void {
  }
}
