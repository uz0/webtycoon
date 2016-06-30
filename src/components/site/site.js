import {Component} from '@angular/core';
import SiteService from '../../services/site.service';

@Component({
  selector: 'site',
  //injectables: [SiteService],
  templateUrl: './components/site/site.html'
})
export default class Site {
  constructor(site: SiteService){
    this.site = site;
  }

}