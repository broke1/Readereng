<template>
    <div class="container">
        <div class="page-block">
            <div class="page" ref ="page" @click="getElement($event)">
                Hello Kitty. How are you? And hello Bob!
            </div>
            <div class="clue" ref="clue" @click="hideClue()"></div>
        </div>
    </div>
</template>

<script>
    import script from '../scripts/mainPage'
    export default script
</script>

<style lang="sass" scoped>
    @import "../sass/mainPage.sass"
</style>