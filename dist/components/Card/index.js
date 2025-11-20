// dist/components/Card.js
import { LitElement, html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

export class UrCard extends LitElement {
    static properties = {
        tweet: {type: Object},
        author: {type: Object},
        mediaMap: {type: Object}
    };

    static styles = css`
        :host {
            display: block;
            background: #111;
            border: 1px solid #333;
            border-radius: 16px;
            padding: 16px;
            margin-bottom: 20px;
            max-width: 100%;
        }
        .author {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }
        .author img {
            width: 52px;
            height: 52px;
            border-radius: 16px; /* 圆角头像（方形圆角，更柔和） */
            margin-right: 12px;
            object-fit: cover;
        }
        .author strong {
            font-size: 18px;
            color: #fff;
        }
        .meta {
            color: #888;
            font-size: 14px;
            margin-left: 8px;
        }
        p {
            margin: 12px 0;
            white-space: pre-wrap;
            word-break: break-word;
        }
        img, video {
            max-width: 100%;
            border-radius: 12px;
            margin: 8px 0;
        }
        video {
            width: 100%;
        }
        .view {
            color: #1d9bf0;
            font-size: 14px;
            text-decoration: none;
        }
        .view:hover {
            text-decoration: underline;
        }
    `;

    render() {
        const t = this.tweet;
        const a = this.author;

        const mediaElements = repeat(t.attachments?.media_keys || [], key => key, key => {
            const m = this.mediaMap[key];
            if (!m) return '';
            if (m.type === 'photo') {
                return html`<img src="${m.url}" loading="lazy">`;
            }
            if (m.type === 'video' || m.type === 'animated_gif') {
                return html`
                    <video controls loop playsinline poster="${m.preview_image_url || m.url}" preload="none">
                        <source src="${m.url}" type="video/mp4">
                    </video>`;
            }
            return '';
        });

        return html`
            <div class="author">
                <img src="${a.profile_image_url}">
                <div>
                    <strong>${a.name} @${a.username}</strong>
                    <span class="meta">· ${new Date(t.created_at).toLocaleString('zh-CN', {hour12: false}).replace(/:\d{2}$/, '')}</span>
                </div>
            </div>
            <p>${t.text}</p>
            ${mediaElements}
            <a href="https://x.com/${a.username}/status/${t.id}" class="view" target="_blank">在 X 上查看 ↗</a>
        `;
    }
}

customElements.define('ur-card', UrCard);