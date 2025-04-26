import store from "./store/index";
import Application from "@components/Application.vue"
import { createApp } from 'vue';

createApp(Application).use(store).mount('#app');
