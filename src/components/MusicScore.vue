<template>
    <div id="score"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import Vex from 'vexflow'
import { Note } from "@/lib/types"

export default defineComponent({
    name: 'Score',
    props: {
        msg: String
    },
    mounted() {
        this.draw(this.$store.state.currentNoteName)
    },
    computed: {
        currentNote() {
            return this.$store.state.currentNoteName
        }
    },
    watch: {
        currentNote(val, old) {
            this.erase()
            this.draw(val)
        }
    },
    methods: {
        draw(note: Note) {
            const vf = new Vex.Flow.Factory({
                renderer: { elementId: 'score', width: 125, height: 130 }
            })

            const score = vf.EasyScore()
            const system = vf.System()

            system.addStave({
                voices: [
                    score.voice(score.notes(note + '/w', { stem: 'up' }), {})
                ]
            }).addClef('treble').addTimeSignature('4/4')

            vf.draw()
        },
        erase() {
            const staff = document.getElementById('score')
            while (staff!.hasChildNodes()) {
                staff!.removeChild(staff!.lastChild!)
            }
        }
    }
})
</script>

<style scoped>
div#score {
    display: flex;
    justify-content: center;
}
</style>
