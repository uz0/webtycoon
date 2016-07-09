import {Injectable} from '@angular/core';
import SiteService from './site.service';
import MoneyService from './money.service';
import {
  article_price, 
  advert_price, 
  copywriter_price
} from '../configuration';

@Injectable()
export default class ShopService {

  constructor(
    site: SiteService,
    money: MoneyService
  ) {
    this.site = site;
    this.money = money;
  }

  buy(type) {
    if(!this.site.list.length) {
      return;
    }
    
    let price = this.getPrice(type);
    if (this.money.value < price) {
      return;
    }

    this.money.addMoney(-price);
    
    let capitalizedType = type[0].toUpperCase() + type.slice(1);
    this.site.active[`add${capitalizedType}`]();
  }

  getCount(type) {
    return this.site.active[`${type}s`].length;
  }

  getPrice(type) {
    let count = this.getCount(type);
    let prices = {
      article: article_price,
      advert: advert_price,
      copywriter: copywriter_price
    };

    return prices[type](count);
  }

}
