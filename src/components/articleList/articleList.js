import { Component } from '@angular/core';
import { Article } from '../article/article';

@Component({
  selector: 'articleList',
  template: '<ul><li *ngFor="let article of articles">{{article.articleName}}</li></ul>',
  directives: [
    Article
  ]
})
export class ArticleList {
  articles = [];

  constructor() {
    this.articles = [
      new Article('Title 1'),
      new Article('Title 2')];
  }

  addArticle(article: Article){
    this.articles.push(article);
  }
}
