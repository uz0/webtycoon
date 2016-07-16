import { ARTICLE_FACTOR } from '../configuration';
import textGenerator from './textGenerator.class';

export default class Site {
  constructor(name) {
    this.name = name;
    this.articles = [];
    this.adverts = [];
    this.copywriters = [];
    this.textGenerator = textGenerator;
  }

  get visitorsPerSec() {
    return this.articles.length * ARTICLE_FACTOR;
  }

  addArticle() {
    console.log(this.textGenerator);
    this.articles.push(this.textGenerator.article());
  }

  addAdvert() {
    this.adverts.push(this.textGenerator.advert());
  }

  addCopywriter() {
    this.copywriters.push('copywriter');
  }

}
