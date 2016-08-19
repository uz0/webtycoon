import {Injectable} from '@angular/core';
import {STARTUP_CAPITAL} from '../configuration';

@Injectable()
export default class MoneyService {
  constructor(){
    this.money = STARTUP_CAPITAL;
  }

  get value() {
    return this.money;
  }

  addMoney(value) {
    this.money += value;
    return this.money;
  }

}
