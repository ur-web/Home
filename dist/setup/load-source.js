// 加载 importmap
window.__ur__.load.importMap({
    imports: {
        "lit": "https://cdn.jsdelivr.net/npm/lit@3.3.1/+esm",
        "lit/directives/repeat.js": "https://cdn.jsdelivr.net/npm/lit@3.3.1/directives/repeat.js/+esm",
        "@/": "/dist/"
    }
});

// 加载全局样式
window.__ur__.load.style('/dist/styles/common.css');
