import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, ParentComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground/playground.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
