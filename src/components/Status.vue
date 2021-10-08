<template>
    <div id="status">
        <ul>
            <li>
                <p>得点:{{ $store.state.points }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core"
export default defineComponent({
    name: 'Status'
})
</script>

<style scoped>
#status {
    border-bottom: solid 1px #ddd;
    color: var(--el-color-primary);
}

ul {
    list-style: none;
}
</style>