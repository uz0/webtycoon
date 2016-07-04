import {Injectable} from '@angular/core';

@Injectable()
export default class MoneyService {
  constructor(){
    this.money = 10000;
  }

  get value() {
    return this.money;
  }

  addMoney(value) {
    this.money += value;
    return this.money;
  }

}
