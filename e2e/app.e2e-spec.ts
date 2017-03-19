import { HeroWebapiPage } from './app.po';

describe('hero-webapi App', function() {
  let page: HeroWebapiPage;

  beforeEach(() => {
    page = new HeroWebapiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
