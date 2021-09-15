<template>
    <el-form ref="form" label-width="120px">
        <el-form-item label="Difficulty Level">
            <el-select v-model="currentLevel" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

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
            get() { return this.$store.state.currentLevel },
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
