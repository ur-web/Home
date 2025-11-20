import { fetchSequence, fetchMonthData } from "@/services/api.js";

export class UseDataList {
    constructor(host) {
        this.host = host;
        // 如果使用 Lit 的 Controller 模式，可以在这里添加 host.addController(this);
        // 但根据你的需求，这里仅作为逻辑封装类
    }

    async getData() {
        try {
            // 更新 host 状态
            this.host.updatedText = `最后更新：${new Date().toLocaleString("zh-CN")}`;
            
            const timeline = await fetchSequence();
            const months = [...timeline.months].reverse();
            
            // 初始化数据结构
            this.host.timelineData = months.map((month) => ({
                month,
                loaded: false,
                data: null,
            }));
            this.host.requestUpdate(); // 初始结构变化触发渲染

            // 并行拉取数据
            months.forEach((month, index) => {
                fetchMonthData(month).then((json) => {
                    // 创建新数组以触发 Lit 响应式更新
                    const newData = [...this.host.timelineData];
                    
                    if (json.data?.length) {
                        newData[index] = {
                            month,
                            loaded: true,
                            tweets: json.data,
                            users: json.includes.users,
                            media: json.includes.media,
                        };
                    } else {
                        newData[index] = { month, loaded: true, empty: true };
                    }
                    
                    // 赋值新数组，确保引用变化
                    this.host.timelineData = newData;
                    // 此时不需要手动 requestUpdate，因为属性赋值会自动触发（如果在 properties 中定义了）
                });
            });
            
        } catch (error) {
            console.error(error);
            this.host.updatedText = "加载失败";
            this.host.requestUpdate();
        }
    }
}

