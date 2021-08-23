<template>
    <ul id="answer">
        <li v-for="note in scale" :key="note">
            <button>{{ note }}</button>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data: function () {
        return {
            scale: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]
        }
    },
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
