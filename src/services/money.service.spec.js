import {
  describe,
  expect,
  it
} from '@angular/core/testing';
import MoneyService from './money.service.js';
import {STARTUP_CAPITAL} from '../configuration';

describe('Money service test', () => {
  let money;

  beforeEach(() => {
    money = new MoneyService();
  });

  it('return correct amount of money', () => {
    expect(money.value).toBe(STARTUP_CAPITAL);
  });

  it('adds money', () => {
    expect(money.addMoney(100)).toBe(STARTUP_CAPITAL+100);
  });
});