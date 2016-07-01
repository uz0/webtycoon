import 'babel-polyfill';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import Header from './components/header/header';
import Money from './components/money/money';
import Site from './components/site/site';
import MoneyService from './services/money.service';
import SiteService from './services/site.service';

@Component({
  selector: 'webtycoon',
  templateUrl: 'webtycoon.html',
  directives: [
    Header,
    Money,
    Site
  ],
  providers: [
    MoneyService,
    SiteService
  ]
})
class Webtycoon {
  constructor(money: MoneyService, site: SiteService) {
    this.money = money;
    this.site = site;
  }

  addMoney(sum) {
    this.money.addMoney(sum);
  }


}

bootstrap(Webtycoon).catch(error => {
  console.log(error);
});
