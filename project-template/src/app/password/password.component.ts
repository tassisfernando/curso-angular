import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  styles: [`
    .white-text {
      color: white;
    }
  `]
})
export class PasswordComponent implements OnInit {

  showDetails: boolean = false;
  logs: Array<number> = [];
  timestamps = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowDetails(): void {
    this.showDetails = !this.showDetails;
    this.logs.push(this.logs.length + 1);
    this.timestamps.push(new Date());
  }
}
