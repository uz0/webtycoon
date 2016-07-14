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
    this.isEditing = true;
    this.articles = [];
    this.adverts = [];
    this.fillArticles();
  }

  saveNewSite(){
    this.isEditing = false;
    this.site.addSite(this.sitename);
    this.sitename = '';
  }

  setActive(site){
    this.site.setActive(site);
    this.fillArticles();
    var i;
    for(i=0; (i<15) && (i<this.site.active.articles.length); i++){
      this.articles[i] = this.site.active.articles[i];
    }
    for(i=0; (i<5) && (i<this.site.active.adverts.length); i++){
      this.adverts[i] = this.site.active.adverts[i];
    }

  }

  fillArticles(){
    var i;
    for(i=0; i<15; i++){
      this.articles[i] = 'your article';
    }
    for(i=0; i<5; i++){
      this.adverts[i] = 'your advert could be here';
    }
  }

}
