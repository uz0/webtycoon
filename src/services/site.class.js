import loopConfiguration from '../configuration/loop';

export default class Site {
  constructor(name) {
    this.name = name;
    this.articles = [];
    this.adverts = [];
    this.copywriters = [];
  }

  get visitorsPerSec() {
    return this.articles.length*loopConfiguration.articleCoefficient;
  }

  addArticle() {
    this.articles.push('text');
  }

  addAdvert() {
    this.adverts.push('adverts');
  }

  addCopywriter() {
    this.copywriters.push('copywriters');
  }

}
