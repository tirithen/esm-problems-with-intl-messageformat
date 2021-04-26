import { html, fixture, expect } from '@open-wc/testing';

import '../src/translated-text.js';

describe('TranslatedText', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<translated-text></translated-text>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
