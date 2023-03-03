import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  isEmptyUserName(): boolean {
    return this.userName.length === 0;
  }

  resetUserName(): void {
    this.userName = '';
  }

}
