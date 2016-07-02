export default class Site{
  constructor(name){
    this.name = name;
    this.articles = [];
    this.adverts = [];
    this.copywriters = [];
  }

  addArticles(){
    this.articles.push('text');
  }

  addAdverts(){
    this.adverts.push('adverts');
  }

  addCopywriters(){
    this.copywriters.push('copywriters');
  }

}
