import { LitElement, html } from "lit";
import "./components/Header/index.js";
import "./components/Container/index.js";
import "@/components/Footer/index.js";
import { UseDataList } from "./hooks/useDataList.js";

export class UrPageHome extends LitElement {
  static properties = {
    updatedText: { type: String },
    timelineData: { type: Array },
  };

  constructor() {
    super();
    this.updatedText = "加载中…";
    this.timelineData = [];
    // 实例化 Hook 并传入 this
    this.dataListHook = new UseDataList(this);
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // 调用 Hook 的方法获取数据
    this.dataListHook.getData();
  }

  render() {
    return html`
      <ur-pages-home-header .updatedText=${this.updatedText}></ur-pages-home-header>
      <ur-pages-home-container
        .items=${this.timelineData}
      ></ur-pages-home-container>
      <ur-footer></ur-footer>
    `;
  }
}

customElements.define("ur-page-home", UrPageHome);
