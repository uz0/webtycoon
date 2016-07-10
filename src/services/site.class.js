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
    this.articles.push('new article');
  }

  addAdvert() {
    this.adverts.push('adverts');
  }

  addCopywriter() {
    this.copywriters.push('copywriters');
  }

}
