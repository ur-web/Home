  // 全局脚本加载工具
  // 必须定义为全局函数，避免在引导程序(main.js)中注入 importmap 之前使用模块系统
  
const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

/**
 * 加载样式
 */
const loadStyle = (href) => {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.href = href;
    link.rel = "stylesheet";
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

const loadImportMap = (importMap) => {
  return new Promise((resolve, reject) => {
    const im = document.createElement("script");
    im.type = "importmap";
    im.textContent = JSON.stringify(importMap);
    document.head.appendChild(im);
    im.onload = resolve;
    im.onerror = reject;
  });
};

window.__ur__ = window.__ur__ || {};
window.__ur__.load = {
  script: loadScript,
  style: loadStyle,
  importMap: loadImportMap,
};


