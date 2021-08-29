<template>
    <section>
        <ul id="answer">
            <li v-for="note in scale" :key="note">
                <button :value="note" v-on:click="submit($event)">{{ note }}</button>
            </li>
        </ul>
        <Result :result="currentAnswer"></Result>
    </section>
</template>

<script lang="ts">
import { computed, reactive } from "vue"
import { useStore, NoteName } from '@/store'
import Result from "./Result.vue";
import Constant from "@/constant"
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        // Storeを取得する
        const store = useStore()
        // return { store };

    },
    data() {
        return {
            scale: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            currentAnswer: Constant.Result.None
        }
    },
    components: {
        Result
    },
    methods: {
        submit: function (e: MouseEvent) {
            // console.log(this.$store.state.currentNoteName);
            console.log("submit");
            let v = (e.target as HTMLInputElement).value;
            if (v == this.$store.state.currentNoteName) {
                this.$data.currentAnswer = Constant.Result.Correct;
            } else {
                this.$data.currentAnswer = Constant.Result.Incorrect;
            }
            console.log(this.$data)
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    list-style: none;
    /* float: left; */
}
ul {
    display: flex;
    justify-content: center;
}
</style>
