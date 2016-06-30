import { Injectable }    from '@angular/core';

@Injectable()
export default class MoneyService {
  constructor(){
    this.money = 100;
  }

  get value(){
    console.log('get money');
    return this.money;
  }

  addMoney(value){
    this.money += value;
    return this.money;
  }

}