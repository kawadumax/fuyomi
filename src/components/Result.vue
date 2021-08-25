<template>
    <div id="result"></div>
</template>

<script>
export default {
    name: 'Result',
    data() {
        return {
            result: "correct"
        }
    },
    mounted() {
    },
    methods: {
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
