import {Injectable}    from '@angular/core';

@Injectable()
export default class StoreService {

  buyArticle(site, money) {
    if (money.value < this.priceOfArticle(site)) {
      return;
    }
    money.addMoney(-this.priceOfArticle(site));
    site.addArticle();
  }

  priceOfArticle(site) {
    let currentNumber = site.articles.length;
    return currentNumber * 20;
  }

}
