<template>
    <section id="answer-section">
        <Result :result="currentAnswer" :is-anim="isAnim" @after-animated="onAfterAnimated"></Result>
        <div id="answer"></div>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store'
import Result from "./Result.vue"
import Constant from "@/lib/types"
import { defineComponent, ref } from 'vue'
import { SVG } from '@svgdotjs/svg.js'
import Soundfont from 'soundfont-player'

export default defineComponent({
    setup() {
        // Storeを取得する
        const store = useStore()
        const instrument = Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano')
        const isAnim = ref(false)
        return { instrument }
    },
    data() {
        return {
            scale: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"],
            currentAnswer: Constant.Result.None,
            isAnim: false,
        }
    },
    mounted() {
        this.drawKey()
    },
    components: {
        Result
    },
    methods: {
        submit: function (e: MouseEvent) {

            this.$data.isAnim = true // アニメーション開始
            let group = (e.target as HTMLElement).closest("g")
            let v = group?.getAttribute("value")
            if (v == this.$store.state.currentNoteName) {
                this.$data.currentAnswer = Constant.Result.Correct
            } else {
                this.$data.currentAnswer = Constant.Result.Incorrect
            }

            this.instrument.then(function (piano: any) {
                piano.play(v)
            })
        },
        onAfterAnimated: function (flag: boolean) {
            this.$data.isAnim = flag
            this.$data.currentAnswer = Constant.Result.None
            this.$store.commit('changeNote')

        },
        drawKey() {
            //[REFACTOR] キーボードの構造は静的なので下記によってレンダリングされるsvgはテンプレート化したほうが良いかもしれん
            function createKeyText(group: any, rect: any, char: string, heightRate: number, font: any) {
                return group.text(char).font(font).center(0.5 * (rect.width() as number), heightRate * (rect.height() as number))
            }
            const White_Key_Width = 20
            const White_Key_Height = 100
            const White_Key_Font = { size: White_Key_Width, family: 'Helvetica' }


            let draw = SVG().addTo('#answer').size(this.scale.length * White_Key_Width, White_Key_Height)
            //白鍵
            this.scale.forEach((noteName, i) => {
                let group = draw.group().attr({ value: noteName }).css("cursor", "pointer")
                let rect = group.rect(White_Key_Width, White_Key_Height).attr({ fill: 'none', stroke: '#222' })
                let text_name = createKeyText(group, rect, noteName[0], 0.75, White_Key_Font)
                let text_oct = createKeyText(group, rect, noteName[1], 0.9, White_Key_Font)
                group.mouseover(function (this: any) {
                    this.findOne("rect").fill("var(--el-color-primary-light-2)")
                })
                group.mouseout(function (this: any) {
                    this.findOne("rect").fill('white')
                })
                group.click(this.submit)
                group.move(White_Key_Width * i, 0)
            })

            // 黒鍵
            const Black_Key_Width = White_Key_Width - 6
            const Black_Key_Height = White_Key_Height / 2
            const Black_Key_Font = { size: Black_Key_Width, family: 'Helvetica', fill: "white" }
            this.scale.forEach((noteName, i) => {
                if (noteName[0] == "B" || noteName[0] == "E") {
                    return
                }
                let group = draw.group().attr({ value: noteName[0] + "#" + noteName[1] }).css("cursor", "pointer")
                let rect = group.rect(Black_Key_Width, Black_Key_Height).attr({ fill: 'black', stroke: '#222' })
                let text_name = createKeyText(group, rect, noteName[0], 0.38, Black_Key_Font)
                let text_accident = createKeyText(group, rect, "#", 0.6, Black_Key_Font)
                let text_oct = createKeyText(group, rect, noteName[1], 0.85, Black_Key_Font)
                group.mouseover(function (this: any) {
                    this.findOne("rect").fill("var(--el-color-primary)")
                })
                group.mouseout(function (this: any) {
                    this.findOne("rect").fill('black')
                })
                group.click(this.submit)
                group.move(White_Key_Width * (i + 1) - Black_Key_Width / 2, 0)
            })
        }
    }
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
