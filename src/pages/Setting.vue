<template>
    <el-select v-model="currentLevel" placeholder="Select">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        ></el-option>
    </el-select>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    name: 'Setting',
    data() {
        return {
            options: [{
                value: 0,
                label: 'Level 0'
            }, {
                value: 1,
                label: 'Level 1'
            }]
        }
    },
    computed: {
        currentLevel: {
            get() { return this.$store.state },
            set(val) { this.$store.commit("changeLevel", val) }
        }
    },
    mounted() {
    },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
