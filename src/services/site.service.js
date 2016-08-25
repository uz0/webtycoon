import { Injectable }    from '@angular/core';
import Site from './site.class';

@Injectable()
export default class SiteService {

  constructor(){
    this.list = [];
    this.active = {};
  }

  addSite(name){
    let double = false;
    if (!name){
      return;
    }
    
    this.list.forEach(item => {
      if(item.name === name) {
        double = true;
      }
    });
    
    if(!double) {
      let site = new Site(name);
      this.list.push(site);
      this.setActive(site);
    }
  }

  setActive(site){
    this.active = site;
  }
}
