import {Component} from '@angular/core';
import ShopService from '../../services/shop.service';
import SiteService from '../../services/site.service';

@Component({
  selector: 'shop',
  templateUrl: './components/shop/shop.html'
})
export default class Shop {

  constructor(
    shop: ShopService,
    site: SiteService
  ) {
    this.shop = shop;
    this.site = site;

    this.goods = ['article', 'copywriter', 'advert'];    
  }

  getCount(type) {
    if(this.site.list.length) {
      return this.shop.getCount(type);
    }
    
    return 0;
  }

  getPrice(type) {
    if(this.site.list.length) {
      return this.shop.getPrice(type);
    }

    return 0;
  }

  buy(good) {
    let name = this.site.active.name;
    this.shop.buy(good, name);
  }

}
