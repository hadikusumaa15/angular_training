import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ServerComponent } from "./server.component";

@NgModule({
  declarations:[ServerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [ServerComponent]
})

export class ServerModule{}