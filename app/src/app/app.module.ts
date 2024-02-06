import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavContent } from './Components/nav.component';
import { Logiccontent } from './Components/logic.component';
import { CarselComponent } from './Components/carsel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavContent,
    Logiccontent,
    CarselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
