import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  //template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serversList: Array<string> = [];
  serverStatus = 'offline';
  serverName: string = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  addNewServer(): void {
    this.serversList.push(this.serverName);
    this.serverStatus = 'Server was created. Name is: ' + this.serverName;
    this.serverName = '';
  }

  onUpdateServerName(event: any): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
