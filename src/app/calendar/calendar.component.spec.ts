/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { DateService } from '../date.service';

describe('Component: Calendar', () => {
  it('should create an instance', () => {
    let component = new CalendarComponent( new DateService() );
    expect(component).toBeTruthy();
  });
});
