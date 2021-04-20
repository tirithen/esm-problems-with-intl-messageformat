import { LitElement, html, css } from 'lit-element';

// Import IntlMessageFormat
import IntlMessageFormat from 'intl-messageformat';
console.log(IntlMessageFormat);

export class TranslatedText extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  render() {
    return html`
      <main>
      </main>
    `;
  }
}
