<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    methods: {}
};
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#app {
    width: 100vw;
    height: 100vh;
    font-family: 'Open Sans';
}
</style>
