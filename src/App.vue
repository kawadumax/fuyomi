<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content">
            <h1>
              <RouterLink to="/">FUYOMI</RouterLink>
            </h1>
          </div>
        </el-col>
        <el-col :span="15" :offset="3">
          <div class="grid-content">
            <el-menu default-active="/" class="menu" mode="horizontal" router>
              <el-menu-item index="/">Train</el-menu-item>
              <el-menu-item index="/about">About</el-menu-item>
              <el-menu-item index="/setting">Setting</el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    RouterLink
  }
})
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-flow: column;
}

.menu {
  justify-content: flex-end;
}

h1 a {
  text-decoration: none;
  color: var(--el-color-primary);
}
</style>
