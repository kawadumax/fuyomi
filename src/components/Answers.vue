<template>
    <ul id="answer">
        <li v-for="note in scale" :key="note">
            <button :value="note" v-on:click="submit($event)">{{ note }}</button>
        </li>
    </ul>
</template>

<script>
export default {
    data: function () {
        return {
            scale: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]
        }
    },
    methods: {
        submit: function (e) {
            console.log("submit");
            // console.log(e)
            if (e.target.value == this.$store.state.currentNoteName) {
                console.log("correct")
            } else {
                console.log("wrong")
            }
        }
    }
}
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
