import { Component } from '@angular/core';

import Header from '../header/header';
import Money from '../money/money';
import Store from '../store/store';
import Visitors from '../visitors/visitors';
import Site from '../site/site';

@Component({
  selector: 'webtycoon',
  templateUrl: 'components/webtycoon/webtycoon.html',
  directives: [
    Header,
    Money,
    Site,
    Store,
    Visitors
  ]
})
export default class Webtycoon {
  
}