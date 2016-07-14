import {Component} from '@angular/core';
import SiteService from '../../services/site.service';

@Component({
  selector: 'site',
  templateUrl: './components/site/site.html'
})
export default class Site {
  constructor(site: SiteService){
    this.site = site;

    // site manager vars
    this.sitename = '';
    this.isEditing = true;
  }

  filter(array, limit) {
    if(!array) array = [];

    let length = array.length;
    let newArray = array.slice(Math.max(length - limit, 0));

    let remainder = Math.max(limit - length, 0);
    let emptyElements = Array(remainder).fill('');

    return newArray.concat(emptyElements);
  }

  saveNewSite(){
    this.isEditing = false;
    this.site.addSite(this.sitename);
    this.sitename = '';
  }
}
