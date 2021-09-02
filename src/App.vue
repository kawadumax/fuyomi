<template>
  <ElHeader>
    <h1>FUYOMI</h1>
  </ElHeader>
  <Score></Score>
  <Answer></Answer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Answer from '@/components/Answers.vue'
import Score from '@/components/Score.vue'
import { ElHeader } from 'element-plus'
export default defineComponent({
  name: 'App',
  components: {
    Answer,
    Score,
    ElHeader
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* margin-top: 60px; */
  display: flex;
  justify-content: center;
  flex-flow: column;
}
</style>
