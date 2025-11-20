// 加载全局工具
import "./setup/global/load.js";

// 加载必要资源
import "./setup/load-source.js";

// 必须使用动态导入，确保 importmap 在 App.js 加载前已注入生效
// 因为es module 是先解析代码，再执行代码
// 所以如果直接导入 App.js，会导致 importmap 未注入就解析了App.js，导致App.js无法正常工作
import("./App.js").then((module) => module.default());
