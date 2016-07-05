import {Injectable} from '@angular/core';
import MoneyService from './money.service';
import SiteService from './site.service';
import StoreService from './store.service';
import loopConfiguration from '../configuration/loop';

@Injectable()
export default class GameLoopService {
  constructor(
    money: MoneyService, 
    site:  SiteService, 
    store: StoreService
  ) {
    this.site = site;
    this.money = money;
    this.store = store;
    var gameLoop = setInterval(function() {
      //TODO:
      //add functions addMoney and addArticle
    }, loopConfiguration.frequency*1000)
  }

  addMoney() {
    if(this.site.list.length) {
      this.site.list.forEach(function(item) {
        this.money.addMoney(item.visitorsPerSec()*loopConfiguration.visitorMoney);
        this.money.addMoney(item.adverts.length*loopConfiguration.advertMoney);
      });
    } 
    return;   
  }

  addArticle() {
    let copyWritersCount = 0;
    if(this.site.list.length) {
      this.site.list.forEach(function(item, i) {
        for(let f = 0; f < item.copywriters.length; f++) {
          this.store.buy('article');
        }
        copyWritersCount = 0;
      });
    } 
    return;      
  }

}