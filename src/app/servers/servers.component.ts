import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer: boolean = true;
  serverCreationStatus: string = 'No server was created!';

  constructor() {
  }

  onCreatedServer(): void {
    this.serverCreationStatus = 'Server was created!';
    this.allowNewServer = false;
  }

}
