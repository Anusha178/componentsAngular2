import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularcomponentComponent } from './angularcomponent/angularcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularcomponentComponent,
    SecondcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
