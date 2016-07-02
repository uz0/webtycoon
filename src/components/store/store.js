import {Component, Input} from '@angular/core';
import StoreService from '../../services/store.service';
@Component({
  selector: 'store',
  templateUrl: './components/store/store.html'
})
export default class Store {

  @Input() money;
  @Input() site;

  constructor(store:StoreService) {
    this.store = store;
  }

  buyArticle() {
    this.store.buyArticle(this.site, this.money);
  }

  buyAdvert() {

  }

  buyCopywriter() {

  }


}
