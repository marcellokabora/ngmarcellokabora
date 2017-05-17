import { MarcellokaboraPage } from './app.po';

describe('marcellokabora App', () => {
  let page: MarcellokaboraPage;

  beforeEach(() => {
    page = new MarcellokaboraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
