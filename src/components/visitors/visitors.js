import {Component} from '@angular/core';
import SiteService from '../../services/site.service';

@Component({
  selector: 'visitors',
  templateUrl: './components/visitors/visitors.html'
})
export default class Visitors {
  constructor(site: SiteService) {
    this.site = site;
  }
}