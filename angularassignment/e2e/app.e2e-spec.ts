import { AngularassignmentPage } from './app.po';

describe('angularassignment App', function() {
  let page: AngularassignmentPage;

  beforeEach(() => {
    page = new AngularassignmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
