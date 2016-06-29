import {Component} from '@angular/core';

@Component({
  selector: 'webtycoon',
  templateUrl: 'components/webtycoon/webtycoon.html'
})
export default class Webtycoon {
  constructor() {
    console.info('Webtycoon Component Mounted Successfully');
  }

}