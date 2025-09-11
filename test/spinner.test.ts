import { fixture, html, expect } from '@open-wc/testing';
import '../src/';

describe('spinner', () => {
	describe('Component Creation', () => {
		it('should create a spinner element', async () => {
			const el = await fixture(html`<cosmoz-spinner></cosmoz-spinner>`);
			expect(el).to.exist;
			expect(el.tagName.toLowerCase()).to.equal('cosmoz-spinner');
		});
	});
});
