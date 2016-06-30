import {Component} from '@angular/core';
import {ArticleList} from '../articleList/articleList';

@Component({
  selector: 'webtycoon',
  templateUrl: 'components/webtycoon/webtycoon.html',
  directives: [
    ArticleList
  ]
})
export default class Webtycoon {
  articleList: ArticleList;
  constructor() {
    this.articleList = new ArticleList();
    console.info('Webtycoon Component Mounted Successfully');
  }

}
