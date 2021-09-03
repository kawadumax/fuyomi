<template>
  <ElContainer>
    <ElHeader>
      <ElRow :gutter="20">
        <ElCol :span="9">
          <div class="grid-content">
            <h1>FUYOMI</h1>
          </div>
        </ElCol>
        <ElCol :span="12" :offset="3">
          <div class="grid-content">
            <ElMenu :default-active="'1'" class="menu" mode="horizontal">
              <ElMenuItem index="1">
                <RouterLink to="/train">Fuyomu</RouterLink>
              </ElMenuItem>
              <ElMenuItem index="2">
                <RouterLink to="/about">About</RouterLink>
              </ElMenuItem>
              <ElMenuItem index="3">
                <RouterLink to="/setting">Setting</RouterLink>
              </ElMenuItem>
            </ElMenu>
          </div>
        </ElCol>
      </ElRow>
    </ElHeader>
    <ElMain>
      <!-- <Score></Score>
      <Answer></Answer>-->
      <RouterView></RouterView>
    </ElMain>
  </ElContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Answer from '@/components/Answers.vue'
// import Score from '@/components/Score.vue'
import { ElHeader, ElMenu, ElMenuItem, ElContainer, ElRow, ElCol, ElMain } from 'element-plus'
import { RouterLink, RouterView } from 'vue-router';
export default defineComponent({
  name: 'App',
  components: {
    // Answer,
    // Score,
    ElHeader,
    ElMenu,
    ElMenuItem,
    ElContainer,
    ElRow,
    ElCol,
    ElMain,
    RouterView,
    RouterLink
  }
});
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-flow: column;
}

.menu {
  justify-content: flex-end;
}
</style>
