import { Angular2CesiumExamplePage } from './app.po';

describe('angular2-cesium-example App', () => {
  let page: Angular2CesiumExamplePage;

  beforeEach(() => {
    page = new Angular2CesiumExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
