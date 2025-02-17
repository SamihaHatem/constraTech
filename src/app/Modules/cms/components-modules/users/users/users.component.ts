import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  FilterStatus: any
  listOfUsers: any[] = [];
  statusList: any[] = [];
  isError: boolean = false;
  isLoading: boolean = true;
  constructor(private userServices: UserService) { }
  
  ngOnDestroy(): void {
    this.getAllUsersSubscription.unsubscribe();
  }

  onChangeFilter() { }

  getAllUsersSubscription: Subscription = new Subscription()
  getAllUsers() {
    this.getAllUsersSubscription = this.userServices.getAllUsers().subscribe((response: any) => {
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
