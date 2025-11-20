import { render, html } from 'lit';
import '@/pages/Home/index.js';

const init = () => {
    const root = document.getElementById('root');
    render(html`<ur-page-home></ur-page-home>`, root);
};

export default init;
