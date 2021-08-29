<template>
    <div id="result">{{ gooOrBoo }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core"
import { Result } from "@/constant"
export default defineComponent({
    name: 'Result',
    props: {
        result: {
            type: Number as PropType<Result>
        }
    },
    data() {
        // return {
        //     result: "correct"
        // }
    },
    computed: {
        gooOrBoo() {
            return this.$props.result == 1 ? "👍" : "👎"
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
}
</style>
