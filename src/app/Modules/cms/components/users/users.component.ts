import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  FilterStatus: any
  listOfUsers: any[] = [];
  statusList: any[] = [];
  isError: boolean = false;
  isLoading: boolean = true;
  constructor(private userServices: UserService) { }

  onChangeFilter() { }

  getAllUsers() {
    this.userServices.getAllUsers().subscribe((response: any) => {
      console.log(response)
      this.listOfUsers = response.result
      this.isLoading = false
      this.isError = false
    }, (err: any) => {
      console.log(err)
      this.isLoading = false
      this.isError = true
    })
  }

  ngOnInit(): void {
    this.getAllUsers()
  }
}
