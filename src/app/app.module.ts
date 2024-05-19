import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './assignments/basics-assignment-1-start/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignments/basics-assignment-1-start/warning-alert/warning-alert.component';
import { DatabindingComponent } from './assignments/basics-assignment-2-start/databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    DatabindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
