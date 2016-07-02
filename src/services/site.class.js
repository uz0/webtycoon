export default class Site{
  constructor(name){
    this.name = name;
    this.articles = [];
    this.adverts = [];
    this.copywriters = [];
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
