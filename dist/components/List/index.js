import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import '@/components/Card/index.js';

export class UrList extends LitElement {
    static properties = {
        month: {type: String},
        tweets: {type: Array},
        users: {type: Array},
        media: {type: Array},
    };

    static styles = css`
        :host {
            display: block;
            margin-bottom: 40px;
        }
        h2 {
            text-align: center;
            color: #1d9bf0;
            margin: 50px 0 20px;
            font-size: 18px;
        }
    `;

    render() {
        // 构建 media_key → media 对象映射
        const mediaMap = {};
        this.media?.forEach(m => mediaMap[m.media_key] = m);
        
        // 假设只有一个作者（目前逻辑如此）
        const author = this.users[0];

        return html`
            <h2>${this.month.replace('.', '年')}月 (${this.tweets.length} 条)</h2>
            ${repeat(this.tweets, (tweet) => tweet.id, (tweet) => html`
                <ur-card .tweet=${tweet} .author=${author} .mediaMap=${mediaMap}></ur-card>
            `)}
        `;
    }
}

customElements.define('ur-list', UrList);

