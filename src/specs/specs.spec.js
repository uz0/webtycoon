import {
  async,
  describe,
  expect,
  inject,
  it
} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import Specs from './specs.js';

describe('Specs', () => {
  it('renders header text', async(inject([TestComponentBuilder], tcb => {
    tcb
      .createAsync(Specs)
      .then(fixture => {
        fixture.detectChanges();

        expect(fixture.debugElement.nativeElement).toHaveText('specs');
      });
  })));
});