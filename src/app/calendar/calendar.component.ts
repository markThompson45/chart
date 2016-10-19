import { Component, OnInit } from '@angular/core';

import { DateService } from '../date.service';
import { CalendarDay } from '../calendar-day';
import { WeekDays } from '../weekdays';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  today: Date = new Date();
  days: CalendarDay[][];
  monthName: string;
  year: number;
  dayOfMonth: number;
  dayNames: string[];

  constructor( private dateService: DateService ) { }
    
  ngOnInit(){
      this.days = this.dateService.getDays( this.today );
      this.monthName = this.dateService.getMonth( this.today );
      this.year = this.today.getFullYear();
      this.dayOfMonth = this.today.getDate();
      this.dayNames = this.dateService.getDayNames();
  }
}
