/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PadNumberPipe } from './pad-number.pipe';

describe('Pipe: PadNumber', () => {
  it('create an instance', () => {
    let pipe = new PadNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('it should pad input of 1, 000 to 001', () => {
    let pipe = new PadNumberPipe();
    expect(pipe.transform(1, "000")).toEqual("001");
  });
});
