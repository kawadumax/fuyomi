<template>
    <section id="answer-section">
        <Result :result="currentAnswer" :is-anim="isAnim" @after-animated="onAfterAnimated"></Result>
        <Keyboard @key-pressed="onKeyPressed"></Keyboard>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import Result from "./Result.vue"
import Keyboard from "./Keyboard.vue"
import Constant, { Note } from "@/lib/types"
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        // Storeを取得する
        const store = useStore()
        const isAnim = ref(false)
        const currentAnswer = ref(Constant.Result.None)

        const onAfterAnimated = () => {
            isAnim.value = false
            currentAnswer.value = Constant.Result.None
            store.commit('changeNote')
        }

        const onKeyPressed = (noteValue: Note) => {
            // console.log(noteValue + "keyPressed!")
            isAnim.value = true
            let R = Constant.Result
            let isNoteCorrect = noteValue == store.state.currentNoteName
            if (isNoteCorrect) {
                store.dispatch("addPoint")
                currentAnswer.value = R.Correct
            } else {
                currentAnswer.value = R.Incorrect
            }
        }
        return { isAnim, currentAnswer, onAfterAnimated, onKeyPressed }
    },
    components: {
        Result,
        Keyboard
    },
})
</script>

<style scoped>
li {
    list-style: none;
}
#answer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>
