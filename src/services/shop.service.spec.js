import {
  describe,
  expect,
  it
} from '@angular/core/testing';
import ShopService from './shop.service.js';
import {
  article_price
} from '../configuration';

describe('Shop service test', () => {
  let siteFixture = {
    list: [ 
      {
        name: 'site.ru',  
        articles: ['article 0', 'article 1'],
        adverts: ['advert 0'],
        copywriters: ['copywriter'],
        addArticle: () => siteFixture.active.articles.push('article 2'),
        addAdvert: () => siteFixture.active.adverts.push('advert 1'),
        addCopywriter: () => siteFixture.active.copywriters.push('copywriter')
      },
      {
        name: 'site2.ru'
      }
    ],
    active: {
      name: 'site.ru',
      articles: ['article 0', 'article 1'],
      adverts: ['advert 0'],
      copywriters: ['copywriter']
    }
  };

  let moneyFixture = {
    value: 10000,
    addMoney: income => {}
  };

  let shop = new ShopService(siteFixture, moneyFixture);

  it('getCount works only with lower case', () => {
    expect(shop.getCount('article')).toBe(2);
  });

  it('getPrice works only with lower case', () => {
    expect(shop.getPrice('article')).toBe(article_price(2));
  });

  describe('buy function', () => {
    console.log

    it('should buy article', () => {
      shop.buy('article', siteFixture.active.name);
      expect(shop.getCount('article')).toBe(3);
    });

    it('should buy advert', () => {
      shop.buy('advert', siteFixture.active.name);
      expect(shop.getCount('advert')).toBe(2);
    });

    it('should buy copywriter', () => {
      shop.buy('copywriter', siteFixture.active.name);
      expect(shop.getCount('copywriter')).toBe(2);
    });    
  });

});
