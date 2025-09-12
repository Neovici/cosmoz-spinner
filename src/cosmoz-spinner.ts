import { component, css, html } from '@pionjs/pion';

const styles = css`
	@keyframes rotating {
		100% {
			transform: rotate(360deg);
		}
	}

	:host {
		flex: none !important;
	}

	.spinner {
		--cosmoz-spinner-width: 20px;
		--cosmoz-spinner-height: 20px;
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		width: var(--cosmoz-spinner-width, 22px);
		height: var(--cosmoz-spinner-height, 22px);
		border: 2px solid rgba(0, 0, 0, 0.1);
		border-top: 2px solid #5f5a92;
		animation: rotating 1.2s infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
		box-sizing: border-box;
		margin: 0 4px;
	}
`;

const Spinner = () => html`<div class="spinner"></div>`;

export const CosmozSpinner = component(Spinner, { styleSheets: [styles] });

customElements.define('cosmoz-spinner', CosmozSpinner);
