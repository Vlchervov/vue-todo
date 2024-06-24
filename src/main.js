import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

const app = createApp(App);

app.use(createPinia());
app.use(Antd)

app.mount("#app");