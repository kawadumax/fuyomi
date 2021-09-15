import About from "@/pages/About.vue"
import Train from "@/pages/Train.vue"
import Setting from "@/pages/Setting.vue"
export default [
  { path: "/about", name: "about", component: About },
  { path: "/", name: "train", component: Train },
  { path: "/setting", name: "setting", component: Setting },
]
