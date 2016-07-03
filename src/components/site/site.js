import {Component} from '@angular/core';
import SiteService from '../../services/site.service';

@Component({
  selector: 'site',
  templateUrl: './components/site/site.html'
})
export default class Site {

  constructor(site: SiteService){
    this.sitename = '';
    this.site = site;
  }

}
