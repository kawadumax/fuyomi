<template>
  <Score></Score>
  <Answer></Answer>
</template>

<script>
import Answer from './components/Answers.vue'
import Score from './components/Score.vue'
export default {
  name: 'App',
  components: {
    Answer,
    Score
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>
