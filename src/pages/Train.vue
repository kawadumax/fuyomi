<template>
    <Score></Score>
    <Answer></Answer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Answer from '@/components/Answers.vue'
import Score from '@/components/Score.vue'
export default defineComponent({
    name: 'Train',
    components: {
        Answer,
        Score
    }
})
</script>

<style scoped>
</style>
