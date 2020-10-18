<template>
    <div class="app">
        Hello, World!!
        <Logo />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Logo from "@/components/Logo"

@Component({
    components: {
        Logo
    }
})
export default class extends Vue {}
</script>

<style lang="stylus">
@import "@/assets/styles/common.styl"
</style>

<style scoped lang="stylus">

.app
    background-color red
</style>
