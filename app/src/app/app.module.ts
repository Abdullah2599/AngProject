import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavContent } from './Components/nav.component';
import { Logiccontent } from './Components/logic.component';

@NgModule({
  declarations: [
    AppComponent,
    NavContent,
    Logiccontent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
