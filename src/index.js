import 'babel-polyfill';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import Header from './components/header/header';
import Money from './components/money/money';
import MoneyService from './services/money.service';
import Site from './components/site/site';
import SiteService from './services/site.service';
import Store from './components/store/store';
import StoreService from './services/store.service';

@Component({
  selector: 'webtycoon',
  templateUrl: 'webtycoon.html',
  directives: [
    Header,
    Money,
    Site,
    Store
  ],
  providers: [
    MoneyService,
    SiteService,
    StoreService
  ]
})
class Webtycoon {
  constructor(money:MoneyService, site:SiteService, store:StoreService) {
    this.money = money;
    this.site = site;
    this.store = store;
  }

  addMoney(sum) {
    this.money.addMoney(sum);
  }
}

bootstrap(Webtycoon, [
  disableDeprecatedForms(),
  provideForms()
]).catch(error => {
  console.log(error);
});
