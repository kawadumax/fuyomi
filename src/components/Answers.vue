<template>
    <section id="answer-section">
        <Result :result="currentAnswer" :is-anim="isAnim" @after-animated="onAfterAnimated"></Result>
        <Keyboard></Keyboard>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import Result from "./Result.vue"
import Keyboard from "./Keyboard.vue"
import Constant from "@/lib/types"
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        // Storeを取得する
        const store = useStore()
        const isAnim = ref(false)
        const currentAnswer = ref(Constant.Result.None)

        const submit = (e: MouseEvent) => {

            isAnim.value = true // アニメーション開始
            let group = (e.target as HTMLElement).closest("g")
            let v = group?.getAttribute("value")
            if (v == store.state.currentNoteName) {
                currentAnswer.value = Constant.Result.Correct
            } else {
                currentAnswer.value = Constant.Result.Incorrect
            }
        }

        const onAfterAnimated = (flag: boolean) => {
            isAnim.value = flag
            currentAnswer.value = Constant.Result.None
            store.commit('changeNote')
        }
        return { isAnim, currentAnswer, onAfterAnimated }
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
