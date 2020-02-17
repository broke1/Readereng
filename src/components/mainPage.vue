<template>
    <div class="hello" @click="showMsg()">
        Hello {{name}}
    </div>
</template>

<script>
    import script from '../scripts/mainPage'
    export default script
</script>

<style lang="sass" scoped>
    @import "../sass/mainPage.sass"
</style>