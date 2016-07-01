import { Injectable }    from '@angular/core';
import Article from '../components/article/article';

@Injectable()
export default class SiteService {
  constructor(){
    this.articles = [];
    this.visitors = 0;
    this.adverts = [];
  }

  addArticle() {
    this.articles.push(new Article('This is text'));
    this.count = this.articles.length;
  }

  getCount(){
    console.log(this.articles.count);
    return this.articles.count;
  }

}
