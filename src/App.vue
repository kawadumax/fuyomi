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
            <ElMenu default-active="/train" class="menu" mode="horizontal" router>
              <ElMenuItem index="/train">Fuyomu</ElMenuItem>
              <ElMenuItem index="/about">About</ElMenuItem>
              <ElMenuItem index="/setting">Setting</ElMenuItem>
            </ElMenu>
          </div>
        </ElCol>
      </ElRow>
    </ElHeader>
    <ElMain>
      <RouterView></RouterView>
    </ElMain>
  </ElContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElHeader, ElMenu, ElMenuItem, ElContainer, ElRow, ElCol, ElMain } from 'element-plus'
import { RouterView } from 'vue-router';
export default defineComponent({
  name: 'App',
  components: {
    ElHeader,
    ElMenu,
    ElMenuItem,
    ElContainer,
    ElRow,
    ElCol,
    ElMain,
    RouterView,
  }
});
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
</style>
