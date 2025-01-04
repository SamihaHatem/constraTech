import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  onChangeFilter() { }


  ngOnInit(): void {
  }
}
