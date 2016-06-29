import {
  async,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import Webtycoon from './webtycoon.js';

describe('Webtycoon', () => {
  it('renders header text', async(inject([TestComponentBuilder], tcb => {
    tcb
      .createAsync(Webtycoon)
      .then(fixture => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('webtycoon');
      });
  })));
});