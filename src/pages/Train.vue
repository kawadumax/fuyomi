<template>
    <Score></Score>
    <Answer></Answer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Answer from '@/components/Answers.vue'
import Score from '@/components/Score.vue'
export default defineComponent({
    name: 'Train',
    components: {
        Answer,
        Score
    }
});
</script>

<style scoped>
/* #app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  flex-flow: column;
} */
</style>
