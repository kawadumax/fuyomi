<template>
    <div id="result-wrap">
        <div id="result">
            <span
                :class="{ animation: isAnim }"
                v-on:animationend="$emit('afterAnimated')"
            >{{ gooOrBoo }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core"
import { Result } from "@/lib/types"
export default defineComponent({
    name: 'Result',
    props: {
        result: {
            type: Number as PropType<Result>
        },
        isAnim: {
            type: Boolean
        }
    },
    emits: [
        'afterAnimated'
    ],
    data() {
        return {

        }
    },
    computed: {
        gooOrBoo() {
            if (this.$props.result == Result.None) return ""
            return this.$props.result == Result.Correct ? "👍" : "👎"
        }
    },
    mounted() {
    },
    methods: {
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#result {
    display: flex;
    justify-content: center;
    font-size: 48px;
    border: 2px solid;
    padding: 10px;
    padding-top: 0px;
    width: 60px;
    min-height: 64px;
}
div#result-wrap {
    display: flex;
    justify-content: center;
}

.animation {
    animation-direction: normal;
    animation-duration: 0.5s;
    animation-name: anim_sc;
    animation-timing-function: ease;
    transform: scale(1, 1);
}
@keyframes anim_sc {
    50% {
        transform: scale(2, 2);
    }

    100% {
        transform: scale(1, 1);
    }
}
</style>
