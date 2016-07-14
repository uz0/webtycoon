import {ARTICLE_FACTOR} from '../configuration';

export default class Site {
  constructor(name) {
    this.name = name;
    this.articles = [];
    this.adverts = [];
    this.copywriters = [];
  }

  get visitorsPerSec() {
    return this.articles.length * ARTICLE_FACTOR;
  }

  addArticle() {
    this.articles.push(`article ${this.articles.length}`);
  }

  addAdvert() {
    this.adverts.push(`advert ${this.adverts.length}`);
  }

  addCopywriter() {
    this.copywriters.push('copywriter');
  }

}
