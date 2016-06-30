import {Component} from '@angular/core';
import MoneyService from '../../services/money.service';

@Component({
  selector: 'money',
  templateUrl: './components/money/money.html'
})
export default class Money {
  constructor(money: MoneyService){
    this.money = money;
  }

}