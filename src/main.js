import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import TodoList from './components/TodoList.vue';
import { bus } from './bus';

// 全局注册AppHeader和TodoList组件
const app = createApp(App);

app.component('AppHeader', AppHeader);
app.component('TodoList', TodoList);

app.config.globalProperties.$bus = bus;

app.mount('#app');
