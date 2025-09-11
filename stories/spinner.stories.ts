import { html } from '@pionjs/pion';
import '../src';

export default {
	title: 'Cosmoz Spinner',
	tags: ['autodocs'],
};

export const Spinner = () => {
	return html`<cosmoz-spinner></cosmoz-spinner>`;
};

Spinner.parameters = {
	docs: {
		description: {
			story: 'A spinner component that indicates loading or processing state.',
		},
	},
};
