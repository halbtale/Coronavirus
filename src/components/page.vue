<template>
    <div class="page">
        <header>
            <h1>{{ title }}</h1>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script>
export default {
    props: ['title']
};
</script>

<style lang="scss" scoped>
header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('../assets/background.jpg');
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
}
main {
    width: 60vw;
    margin: 80px auto;
    font-size: 1.2em;
    @media only screen and (max-width: 700px) {
        font-size: 1em;
    }
}
p {
    margin-bottom: 1em;
}
</style>
