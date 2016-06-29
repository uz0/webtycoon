import 'babel-polyfill';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import Webtycoon from './components/webtycoon/webtycoon';

@Component({
  directives: [Webtycoon],
  selector: 'app',
  template: '<webtycoon></webtycoon>'
})
class Main {

}

bootstrap(Main).catch(error => {
  console.log(error);
});