import 'babel-polyfill';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import Header from './components/header/header';
import Money from './components/money/money';
import MoneyService from './services/money.service';

@Component({
  selector: 'webtycoon',
  templateUrl: 'webtycoon.html',
  directives: [
    Header,
    Money
  ],
  providers: [
    MoneyService
  ]
})
class Webtycoon {
  constructor(money: MoneyService) {
    this.money = money;
  }

  addMoney(sum) {
    this.money.addMoney(sum);
  }
}

bootstrap(Webtycoon).catch(error => {
  console.log(error);
});
