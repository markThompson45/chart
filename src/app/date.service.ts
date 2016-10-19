import { Injectable } from '@angular/core';

import { Month } from './month';
import { CalendarDay } from './calendar-day';

@Injectable()
export class DateService {
  dayNames: string[] = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  months: Month[] = [
    { name: "January",    abbreviation: "Jan", days: 31 },
    { name: "February",   abbreviation: "Feb", days: 28 },
    { name: "March",      abbreviation: "Mar", days: 31 },
    { name: "April",      abbreviation: "Apr", days: 30 },
    { name: "May",        abbreviation: "May", days: 31 },
    { name: "June",       abbreviation: "Jun", days: 30 },
    { name: "July",       abbreviation: "Jul", days: 31 },
    { name: "August",     abbreviation: "Aug", days: 31 },
    { name: "September",  abbreviation: "Sep", days: 30 },
    { name: "October",    abbreviation: "Oct", days: 31 },
    { name: "November",   abbreviation: "Nov", days: 30 },
    { name: "December",   abbreviation: "Dec", days: 31 }
  ];

  getDays( date: Date = new Date() ): CalendarDay[][] {
    let days: CalendarDay[][] = [
      [],[],[],[],[],[]
    ];

    // Figure out which day of the week the first of the month is on.
    // 1. Get a date object for the first of the month (0-6)
    let first: number = this.getFirstWeekDayOfMonth( date );
    let lastMonth: number = date.getMonth() - 1;
    if ( lastMonth < 0 ) lastMonth = 11;
    let lastMonthDays = this.months[ lastMonth ].days;
    let lastMonthCounter = lastMonthDays - first;
    let thisMonthDays = this.months[ date.getMonth() ].days;
    let thisMonthCounter = 0;
    let nextMonthCounter = 0;

    for ( let w = 0; w < 6; w++ ) {
      for ( let d = 0; d < 7; d++ ) {
        if ( lastMonthCounter < lastMonthDays ) {
          days[w][d] = new CalendarDay();
          console.log( w + ": " + d + ": " +days );
          days[w][d].date = lastMonthCounter + 1;
          days[w][d].cssClass = "last-month";
          days[w][d].dayOfWeek = d;
          ++lastMonthCounter;
        } else if ( thisMonthCounter < thisMonthDays ) {
          days[w][d] = new CalendarDay();
          days[w][d].date = thisMonthCounter + 1;
          days[w][d].cssClass = "this-month";
          days[w][d].dayOfWeek = d;
          ++thisMonthCounter;
        } else {
          days[w][d] = new CalendarDay();
          days[w][d].date = nextMonthCounter + 1;
          days[w][d].cssClass = "next-month";
          days[w][d].dayOfWeek = d;
          ++nextMonthCounter;
        }
      }
    }

      
    // Figure out how many days are in the previous and current months.
    // Pad the beginning of the first week, and the end of the last week.
    return days;
  }

  getMonth( d: Date = new Date() ): string {
      return this.months[ d.getMonth() ].name;
  }

  isLeapYear( year: number ): boolean {
      return ((year % 100) === 0) ? ((year % 400) === 0) : ((year % 4) === 0);
  }

  getFirstWeekDayOfMonth( d: Date ): number {
      let dateString = this.getMonth( d ) + " 1, " + d.getFullYear();
      let firstDay = new Date( dateString );
      return firstDay.getDay();
  }

  getDayNames(): string[] {
    return this.dayNames;
  }

  constructor() { }

}
