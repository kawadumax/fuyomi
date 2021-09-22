<template>
    <MusicScore></MusicScore>
    <Answer></Answer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Answer from '@/components/Answers.vue'
import MusicScore from '@/components/MusicScore.vue'
export default defineComponent({
    name: 'Train',
    components: {
        Answer,
        MusicScore
    }
})
</script>

<style scoped>
</style>
