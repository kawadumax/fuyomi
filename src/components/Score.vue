<template>
    <div id="score"></div>
</template>

<script>
import Vex from 'vexflow';

export default {
    name: 'Score',
    props: {
        msg: String
    },
    mounted() {
        this.draw('C4');
    },
    methods: {
        draw(note) {
            const vf = new Vex.Flow.Factory({
                renderer: { elementId: 'score', width: 125, height: 200 }
            });

            const score = vf.EasyScore();
            const system = vf.System();

            system.addStave({
                voices: [
                    score.voice(score.notes(note + '/w', { stem: 'up' }))
                ]
            }).addClef('treble').addTimeSignature('4/4');

            vf.draw();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div#score {
    display: flex;
    justify-content: center;
}
</style>
