import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {SuccessalertComponent} from './successalert/successalert.component';
import {WarningalertComponent} from './warningalert/warningalert.component';
import {UserNameComponent} from './username/username.component';
import {DisplayparagraphComponent} from './displayparagraph/displayparagraph.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessalertComponent,
    WarningalertComponent,
    UserNameComponent,
    DisplayparagraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
