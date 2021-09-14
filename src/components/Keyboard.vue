<template>
    <div id="keyboard">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            :width="KEYBOARD_WIDTH"
            :height="KEYBOARD_HEIGHT"
        >
            <template v-for="(note, index) in scale" :key="note">
                <g
                    class="white"
                    :value="note"
                    :transform="groupPosW(index)"
                    v-on:click="submit($event)"
                >
                    <rect :width="KEY_WIDTH_WHITE" :height="KEY_HEIGHT_WHITE" />
                    <text v-bind:="textPosW(3 / 2)">
                        <tspan>{{ note[0] }}</tspan>
                    </text>
                    <text v-bind:="textPosW(1 / 2)">
                        <tspan>{{ note[1] }}</tspan>
                    </text>
                </g>
            </template>
            <template v-for="(note, index) in scale" :key="note">
                <g
                    class="black"
                    v-if="!(note[0] == 'E' || note[0] == 'B')"
                    :value="note[0] + '#' + note[1]"
                    :transform="groupPosB(index)"
                    v-on:click="submit($event)"
                >
                    <rect :width="KEY_WIDTH_BLACK" :height="KEY_HEIGHT_BLACK" />
                    <text v-bind:="textPosB(5 / 2)">
                        <tspan>{{ note[0] }}</tspan>
                    </text>
                    <text v-bind:="textPosB(3 / 2)">
                        <tspan>#</tspan>
                    </text>
                    <text v-bind:="textPosB(1 / 2)">
                        <tspan>{{ note[1] }}</tspan>
                    </text>
                </g>
            </template>
        </svg>
    </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import Constant from "@/lib/types"
import { defineComponent, onMounted, ref, computed } from 'vue'
import { SVG } from '@svgdotjs/svg.js'
import Soundfont from 'soundfont-player'

export default defineComponent({
    setup() {
        // Storeを取得する
        const store = useStore()
        const instrument = Soundfont.instrument(new AudioContext(), 'acoustic_grand_piano', { gain: 20 })
        const scale = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"]
        const currentAnswer = ref(Constant.Result.None)
        const KEYBOARD_WIDTH = 200
        const KEYBOARD_HEIGHT = 100
        const KEY_WIDTH_WHITE = 20
        const KEY_HEIGHT_WHITE = 100
        const KEY_WIDTH_BLACK = 14
        const KEY_HEIGHT_BLACK = 50
        //フォントサイズは鍵の横幅に合わせる
        const FONT_SIZE_WHITE = KEY_WIDTH_WHITE
        const FONT_SIZE_BLACK = KEY_WIDTH_BLACK

        const submit = (e: MouseEvent) => {
            // isAnim.value = true // アニメーション開始 isAnimを親に伝える必要がある
            let group = (e.target as HTMLElement).closest("g")
            let v = group?.getAttribute("value")
            if (v == store.state.currentNoteName) {
                currentAnswer.value = Constant.Result.Correct
            } else {
                currentAnswer.value = Constant.Result.Incorrect
            }

            instrument.then(function (piano: any) {
                piano.play(v)
            })
        }

        const groupPosW = (index: number) => {
            let x = index * KEY_WIDTH_WHITE
            let y = 0
            return 'translate(' + x + ',' + y + ')'
        }

        const groupPosB = (index: number) => {
            let x = index * KEY_WIDTH_WHITE + KEY_WIDTH_WHITE - KEY_WIDTH_BLACK / 2
            let y = 0
            return 'translate(' + x + ',' + y + ')'
        }

        const textPosW = (yCoefficient: number) => {
            // yの高さの係数を引数として受け取る。
            // textタグのポジションのオブジェクトを返す。
            return {
                "font-size": FONT_SIZE_WHITE,
                x: KEY_WIDTH_WHITE - FONT_SIZE_WHITE / 2,
                y: KEY_HEIGHT_WHITE - FONT_SIZE_WHITE * yCoefficient
            }
        }

        const textPosB = (yCoefficient: number) => {
            return {
                "font-size": FONT_SIZE_BLACK,
                x: KEY_WIDTH_BLACK - FONT_SIZE_BLACK / 2,
                y: KEY_HEIGHT_BLACK - FONT_SIZE_BLACK * yCoefficient
            }
        }

        return {
            scale,
            submit,
            groupPosW, groupPosB, textPosW, textPosB,
            KEYBOARD_WIDTH, KEYBOARD_HEIGHT,
            KEY_WIDTH_WHITE, KEY_HEIGHT_WHITE,
            KEY_WIDTH_BLACK, KEY_HEIGHT_BLACK,
        }
    }
})
</script>

<style scoped>
#keyboard {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

g {
    cursor: pointer;
}

g.white rect {
    fill: white;
    stroke: #222;
}

g.white text {
    fill: #222;
}

g.black rect {
    fill: black;
    stroke: #222;
}

g.black text {
    fill: white;
}

g:hover rect {
    fill: var(--el-color-primary-light-3);
}

#keyboard text {
    font-family: Helvetica, sans-serif;
    text-anchor: middle;
}
</style>
