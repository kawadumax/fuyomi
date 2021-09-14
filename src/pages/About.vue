<template>
    <h1>このアプリについて</h1>
    <p>このアプリは楽譜を早く読めるようになるための訓練用のアプリです。</p>
    <p>Settingで難しさを設定することが出来ます。</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WebMidi from 'webmidi'
export default defineComponent({
    name: 'About',
    props: {
        msg: String,
    },
    methods: {
        // testMidi() {
        // console.log("testmidi")
        // WebMidi.enable(function (err) {

        //     if (err) {
        //         console.log("WebMidi could not be enabled.", err);
        //     } else {
        //         console.log("WebMidi enabled!");
        //     }

        // });
        // let output = WebMidi.outputs[0];
        // console.log(WebMidi.outputs);
        // console.log(output);

        // }
    }
})
</script>

<style scoped>
</style>
