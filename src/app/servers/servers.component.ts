import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = true;
  serverCreationStatus: string = "";
  serverName: string = "";
  username: string = "";
  isResetBtnDisabled: boolean = false;
  isServerCreated: boolean = false;
  servers: Array<string> = ['Default Server', 'Public Server'];

  constructor() {}

  onCreatedServer(): void {
    this.serverCreationStatus = 'Server was created!';
    this.isServerCreated = true;
    this.servers.push(this.serverName);

    setTimeout(() => {
      this.isServerCreated = false;
    }, 2000);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onResetUsername(): void {
    if (this.username) {
      this.username = "";
      this.isResetBtnDisabled = true;
    } else {
      this.isResetBtnDisabled = false;
    }
  }
}
