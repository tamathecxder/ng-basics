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

  constructor() {
  }

  onCreatedServer(): void {
    this.serverCreationStatus = 'Server was created!';
    this.allowNewServer = false;
    this.isServerCreated = true;

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
