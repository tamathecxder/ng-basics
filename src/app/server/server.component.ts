import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .offline {
        font-style: 'italic';
        color: red;
      }
    `
  ]
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'ONLINE';

  constructor() {
    this.serverStatus = Math.random() < 0.5 ? 'OFFLINE' : 'ONLINE';
  }

  getColorStatus(): string {
    return this.serverStatus === "OFFLINE" ? "#C62D42" : "#2fc560";
  }
}
