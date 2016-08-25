describe('webtycoon e2e', () => {
  function addSite(sitename) {
    element(by.name('sitename')).sendKeys(sitename);
    element(by.cssContainingText('.tab', 'Ok')).click();
  }

  function buy(good) {
    element(by.css('.good.' + good + ' .icon')).click();
  }

  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('webtycoon');
  });

  it('shows panel with shop', () => {
    expect(element(by.css('.aside visitors .data')).getText()).toEqual('0');
  });

  it('should add site', () => {
    addSite('site.com');

    expect(element(by.css('.tab.active')).getText()).toEqual('site.com');
  });

  describe('test shop', () => {
    beforeEach(() => {
      browser.get('/');
    });

    it('must buy 1 article', () => {
      addSite('site.com');
      buy('article');

      expect(element(by.css('.good.article .info .name .count')).getText()).toEqual('x1');
    });

    it('must buy 1 copywriter', () => {
      addSite('site.com');
      buy('copywriter');

      expect(element(by.css('.good.copywriter .info .name .count')).getText()).toEqual('x1');
    });

    it('must buy 1 advert', () => {
      addSite('site.com');
      buy('advert');

      expect(element(by.css('.good.advert .info .name .count')).getText()).toEqual('x1');
    });
  });
});