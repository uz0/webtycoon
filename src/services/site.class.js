export default class Site {
  constructor(name) {
    this.name = name;
    this.articles = [];
    this.adverts = [];
    this.copywriters = [];
    this.visitorsPerSec = 0;
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
