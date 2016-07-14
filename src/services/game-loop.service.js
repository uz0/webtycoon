import {Injectable} from '@angular/core';
import MoneyService from './money.service';
import SiteService from './site.service';
import ShopService from './shop.service';
import {
  LOOP_FREQUENCY,
  adverts_income,
  ARTICLES_PER_CYCLE_BY_COPYWRITER
} from '../configuration';

@Injectable()
export default class GameLoopService {
  constructor(
    money: MoneyService,
    site: SiteService,
    shop: ShopService
  ) {
    this.site = site;
    this.money = money;
    this.shop = shop;
    this.coefficient = ARTICLES_PER_CYCLE_BY_COPYWRITER;

    setInterval(() => {
      this.advertWork();
      this.copywriterWork();
    }, LOOP_FREQUENCY);
  }

  advertWork() {
    this.site.list.forEach(item => {
      let articlesCount = item.articles.length;
      let advertCount = item.adverts.length;
      let income = adverts_income(articlesCount, advertCount);

      this.money.addMoney(income);
    });
  }

  copywriterWork() {
    this.coefficient+=ARTICLES_PER_CYCLE_BY_COPYWRITER;
    for(this.coefficient; this.coefficient>=1; this.coefficient--) {
      this.site.list.forEach(item => {
        item.copywriters.forEach(() => this.shop.buy('article'));
      });
    }
  }

}
