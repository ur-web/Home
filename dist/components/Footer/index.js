import { LitElement, html, css } from 'lit';

export class UrFooter extends LitElement {
    static styles = css`
        :host {
            display: block;
        }
        .footer {
            text-align: center;
            margin: 80px 0 40px;
            color: #555;
            font-size: 13px;
        }
    `;

    render() {
        return html`
            <div class="footer">
                Powered by Lit + GitHub Pages
            </div>
        `;
    }
}

customElements.define('ur-footer', UrFooter);

