import { expect, fixture, html } from '@open-wc/testing';
import '../src/';

describe('delay', () => {
  it('stays hidden for --cz-delay-indicator before fading in', async () => {
    const el = await fixture(
      html`<cosmoz-spinner
        delay
        style="--cz-delay-indicator: 10s"
      ></cosmoz-spinner>`,
    );
    expect(getComputedStyle(el).opacity).to.equal('0');
  });

  it('shows at once without delay', async () => {
    const el = await fixture(html`<cosmoz-spinner></cosmoz-spinner>`);
    expect(getComputedStyle(el).opacity).to.equal('1');
  });
});
