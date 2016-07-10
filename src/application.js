import 'babel-polyfill';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import Webtycoon from './components/webtycoon/webtycoon';

import MoneyService from './services/money.service';
import SiteService from './services/site.service';
import ShopService from './services/shop.service';

bootstrap(Webtycoon, [
  disableDeprecatedForms(),
  provideForms(),
  
  MoneyService,
  SiteService,
  ShopService
]).catch(error => {
  console.log(error);
});
