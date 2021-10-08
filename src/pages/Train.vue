<template>
    <Status></Status>
    <MusicScore></MusicScore>
    <Answer></Answer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Answer from '@/components/Answers.vue'
import MusicScore from '@/components/MusicScore.vue'
import Status from '@/components/Status.vue'
export default defineComponent({
    name: 'Train',
    components: {
        Answer,
        MusicScore,
        Status,
    }
})
</script>

<style scoped>
</style>
