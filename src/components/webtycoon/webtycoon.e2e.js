describe('test component', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('has a title', () => {
    expect(browser.getTitle()).toEqual('webtycoon');
  });

  it('shows a header with test text', () => {
    expect(element(by.css('webtycoon h1')).getText()).toEqual('webtycoon');
  });
});
