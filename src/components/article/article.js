import {Component} from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: 'components/article/article.html'
})
export default class Header {
  constructor(text: string){
    this.text = text;
  }

}
