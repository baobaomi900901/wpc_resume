import { createApp } from 'vue'
import "./assets/output.css";
import App from './App.vue'
import router from "./router";

// 安装 Pinia
// 导入 Pinia 插件
import { createPinia } from "pinia";

// createApp(App).mount('#app')

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");