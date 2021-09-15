import { createApp } from "vue"
import App from "./App.vue"
import { store, key } from "./store"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "@/routes"

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(ElementPlus)
app.use(store, key)
app.use(router)
app.mount("#app")
