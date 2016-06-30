import { Component } from '@angular/core';

@Component({
  selector: 'article',
  template: '<h1>{{articleName}}</h1>'
})
export class Article {
  articleName: string;
  constructor(
    name: string){
    this.articleName = name;
  }
}
