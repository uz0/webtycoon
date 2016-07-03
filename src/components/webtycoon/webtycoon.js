import { Component } from '@angular/core';

import Header from '../header/header';
import Money from '../money/money';
import Store from '../store/store';
import Site from '../site/site';

@Component({
  selector: 'webtycoon',
  templateUrl: 'components/webtycoon/webtycoon.html',
  directives: [
    Header,
    Money,
    Site,
    Store
  ]
})
export default class Webtycoon {
  
}