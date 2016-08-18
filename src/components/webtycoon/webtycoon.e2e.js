describe('test component', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('webtycoon');
  });

  it('shows a header with test text', () => {
    expect(element(by.css('.aside visitors .data')).getText()).toEqual('0');
  });
});
