import { LitElement, html } from 'lit';
import '@/components/List/index.js';

export class UrPagesHomeContainer extends LitElement {
    static properties = {
        items: {type: Array} // 接收处理好的 timelineData 数组
    };

    createRenderRoot() {
        return this; // 不使用 Shadow DOM 以便于全局样式控制
    }

    render() {
      
        if (!this.items) return html``;

        return html`
            <div style="max-width: 700px; margin: 0 auto;">
                
                ${this.items.map(item => {
                    if (!item.loaded || item.empty) return html``;

                    return html`
                        <ur-list 
                            .month=${item.month} 
                            .tweets=${item.tweets} 
                            .users=${item.users} 
                            .media=${item.media}
                        ></ur-list>
                    `;
                })}
            </div>
        `;
    }
}

customElements.define('ur-pages-home-container', UrPagesHomeContainer);

