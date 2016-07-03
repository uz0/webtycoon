import {Injectable} from '@angular/core';
import SiteService from './site.service';
import MoneyService from './money.service';
import configuration from '../configuration/prices';

@Injectable()
export default class StoreService {

  constructor(
    site: SiteService,
    money: MoneyService
  ) {
    this.site = site;
    this.money = money;
  }

  buy(type) {
    let price = this.getPrice(type);
    if (this.money.value < price) {
      return;
    }

    this.money.addMoney(-price);
    this.site.active[`add${type}`]();
  }

  getPrice(type) {
    let lowerType = type.toLowerCase();
    let count = this.site.active[`${lowerType}s`].length;
    return configuration[type](count);
  }

}
