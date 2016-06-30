import { Injectable }    from '@angular/core';
//import Article from '../components/article/article';

@Injectable()
export default class SiteService {
  constructor(){
    this.article = [];
    this.visitors = 0;
    this.advert = []; 
    this.count;
  }

  addArticle() {
    this.article.push('new Article');
    this.count = this.article.length;
    console.log('add article');
  }

  get value(){
    console.log('get articles');
    return this.count;
  }

}