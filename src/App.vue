<template>
  <el-container>
    <el-header>
      <h1>
        <RouterLink to="/">FUYOMI</RouterLink>
      </h1>
      <div>
        <el-menu default-active="/" class="menu" mode="horizontal" router>
          <el-menu-item index="/">Train</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-menu-item index="/setting">Setting</el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-main>
      <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from './store'
import { RouterView, RouterLink } from 'vue-router'
export default defineComponent({
  setup() {
    // Storeを取得し、初期化処理を行う。
    const store = useStore()
    store.dispatch("getInitialValue")
  },
  name: 'App',
  components: {
    RouterView,
    RouterLink
  }
})
</script>

<style>
/* :root { */
/* --el-color-primary: green; */
/* CSS変数を初期化できるらしい（できなかった） */
/* } */

body {
  margin: 0px;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-flow: column;
}

.el-menu.menu {
  justify-content: flex-end;
}

.el-menu.el-menu--horizontal.menu {
  border-bottom: none;
  background-color: transparent;
  height: 60px;
}

.el-header {
  border-bottom: 1px solid var(--el-border-color);
  display: flex;
  justify-content: space-between;
}

.el-header div {
  width: 50%;
}

h1 a {
  text-decoration: none;
  color: var(--el-color-primary);
}
</style>
