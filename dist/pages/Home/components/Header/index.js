import { LitElement, html, css } from 'lit';

export class UrPagesHomeHeader extends LitElement {
    static properties = {
        updatedText: {type: String}
    };

    static styles = css`
        :host {
            display: block;
        }
        h1 {
            text-align: center;
            color: #fff;
            margin: 40px 0 20px;
            font-size: 24px;
        }
        .updated {
            text-align: center;
            color: #888;
            font-size: 14px;
            margin-bottom: 30px;
        }
    `;

    render() {
        return html`
            <h1>URのTimeline</h1>
            <div class="updated">${this.updatedText || '加载中…'}</div>
        `;
    }
}

customElements.define('ur-pages-home-header', UrPagesHomeHeader);

