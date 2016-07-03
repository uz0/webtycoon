import {Component, Input} from '@angular/core';
import StoreService from '../../services/store.service';
import SiteService from '../../services/site.service';

@Component({
  selector: 'store',
  templateUrl: './components/store/store.html'
})
export default class Store {

  constructor(
    store: StoreService,
    site: SiteService
  ) {
    this.store = store;
    this.site = site;

    this.goods = ['article', 'advert', 'copywriter'];
  }

  getCount(type) {
    if(this.site.list.length) {
      return this.store.getCount(type);
    }
    
    return 0;
  }

  getPrice(type) {
    if(this.site.list.length) {
      return this.store.getPrice(type);
    }

    return 0;
  }

}
