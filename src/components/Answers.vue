<template>
    <section id="answer-section">
        <ul id="answer">
            <!-- <li v-for="note in scale" :key="note">
                <button :value="note" v-on:click="submit($event)">{{ note }}</button>
            </li>-->
        </ul>
        <Result :result="currentAnswer" :is-anim="isAnim" @after-animated="onAfterAnimated"></Result>
    </section>
</template>

<script lang="ts">
import { computed, reactive } from "vue"
import { useStore } from '@/store'
import Result from "./Result.vue";
import Constant from "@/lib/types"
import { defineComponent } from 'vue';
import { SVG } from '@svgdotjs/svg.js'

export default defineComponent({
    setup() {
        // Storeを取得する
        const store = useStore()
    },
    data() {
        return {
            scale: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"],
            currentAnswer: Constant.Result.None,
            isAnim: false
        }
    },
    mounted() {
        this.drawKey();
    },
    components: {
        Result
    },
    methods: {
        submit: function (e: MouseEvent) {
            this.$data.isAnim = true; // アニメーション開始

            let v = (e.target as HTMLInputElement).value;
            if (v == this.$store.state.currentNoteName) {
                this.$data.currentAnswer = Constant.Result.Correct;
            } else {
                this.$data.currentAnswer = Constant.Result.Incorrect;
            }
            console.log(this.$data)
        },
        onAfterAnimated: function (flag: boolean) {
            this.$data.isAnim = flag;
            this.$store.commit('changeNote');

        },
        drawKey() {

            let draw = SVG().addTo('#answer').size(this.scale.length * 20, 100)
            this.scale.forEach((noteName, i) => {
                let group = draw.group();
                let rect = group.rect(20, 100).attr({ fill: 'none', stroke: '#222' })
                var text_name = group.text(noteName[0])
                    .font({ size: 20, family: 'Helvetica' })
                    .center(0.5 * (rect.width() as number), 0.75 * (rect.height() as number));
                var text_oct = group.text(noteName[1])
                    .font({ size: 20, family: 'Helvetica' })
                    .center(0.5 * (rect.width() as number), 0.9 * (rect.height() as number));
                // rect.click(this.submit);
                // group.click(this.submit);
                group.mouseover(function (this: any) {
                    console.log(this);
                    this.addr({ fill: 'red' });
                })
                group.move(20 * i, 0);
            })
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
    padding: 0px;
}
</style>
