import {
  describe,
  expect,
  it
} from '@angular/core/testing';
import ShopService from './shop.service.js';
import {
  article_price, 
  STARTUP_CAPITAL
} from '../configuration';

describe('Shop service test', () => {
  let siteFixture = {
    list: ['site1', ' site2'],
    active: {articles: ['article 0', 'article 1']}
  };

  let moneyFixture = {
    value: 50
  }

  let shop = new ShopService(siteFixture, moneyFixture);

  it('getCount works only with lower case', () => {
    expect(shop.getCount('article')).toBe(2);
  });

  it('getPrice works only with lower case', () => {
    expect(shop.getPrice('article')).toBe(article_price(2));
  });

});
