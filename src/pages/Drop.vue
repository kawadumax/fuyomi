<template>
    <Status></Status>
    <Dropper></Dropper>
    <Answer></Answer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Answer from '@/components/Answers.vue'
import Dropper from '@/components/Dropper.vue'
import Status from '@/components/Status.vue'
export default defineComponent({
    name: 'Drop',
    components: {
        Answer,
        Dropper,
        Status,
    }
})
</script>

<style scoped>
</style>
