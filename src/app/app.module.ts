import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DateService } from './date.service';
import { PadNumberPipe } from './pad-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    PadNumberPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ DateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
