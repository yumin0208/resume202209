// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

// main.ts
// import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import App from './App.vue'
// //加上加start
// import router from './router'
// import store from './store'
// //加上加end
// const app = createApp(App)

// app.use(ElementPlus)
// app.use(store)
// app.use(router)
// app.mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
