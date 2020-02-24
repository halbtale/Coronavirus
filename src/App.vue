<template>
    <div id="app" v-visibility-change="visibilityChange">
        <router-view />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    created() {
        this.load();
    },
    methods: {
        ...mapActions(['load']),
        visibilityChange(e, hidden) {
            if (!hidden) {
                this.load();
            }
        }
    }
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
