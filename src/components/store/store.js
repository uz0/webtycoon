import {Component, Input} from '@angular/core';
import StoreService from '../../services/store.service';

@Component({
  selector: 'store',
  templateUrl: './components/store/store.html'
})
export default class Store {

  constructor(store:StoreService) {
    this.store = store;
  }

}
