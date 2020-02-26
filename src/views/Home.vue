<template>
    <div id="home">
        <h1 class="title">Coronavirus Info</h1>

        <main class="main">
            <a href="/counter" class="link link--main" @click="goTo( $event, 'counter')">
                Live counter
                <span class="blinking">🔴</span>
            </a>
        </main>
        <section class="secondary">
            <a href="/info" class="link link--secondary" @click="goTo( $event, 'info')">Che cos'è?</a>

            <a
                href="/transmission"
                class="link link--secondary"
                @click="goTo( $event, 'transmission')"
            >Come si trasmette?</a>

            <a
                href="/prevention"
                class="link link--secondary"
                @click="goTo( $event, 'prevention')"
            >Come proteggersi?</a>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        goTo(event, page) {
            event.preventDefault();
            this.$router.push(`/${page}`);
        }
    }
};
</script>

<style lang="scss" scoped>
#home {
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url("../assets/background.jpg");
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
}
.title {
    font-family: "Coda";
    font-size: 4em;
    text-align: center;
    margin: 0 30px;
    @media only screen and (max-width: 700px) {
        font-size: 2.3em;
        margin-top: 30px;
    }
}
.main {
    margin: 50px 0;
    @media only screen and (max-width: 700px) {
        margin: 30px 0;
    }
}
.secondary {
    display: flex;
    justify-content: space-evenly;
    width: 60vw;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
}
.link {
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    display: block;
    color: currentColor;
    text-decoration: none;
    &--main {
        display: flex;
        align-items: center;
        padding: 30px 0;
        border: 10px solid white;
        border-radius: 10px;
        width: 80vw;
        max-width: 500px;
        font-size: 2.2em;
        @media only screen and (max-width: 700px) {
            font-size: 1.2em;
            max-width: 70vw;
            border: 5px solid white;
        }
        @media only screen and (max-width: 400px) {
            padding: 10px 0;
        }
    }
    &--secondary {
        padding: 0px 0;
        border: 5px solid white;
        border-radius: 3px;
        margin: 0 50px;
        padding: 15px 90px;
        @media only screen and (max-width: 1200px) {
            margin: 10px 0px;
            width: 300px;
            padding: 15px 0;
        }
        @media only screen and (max-width: 700px) {
            width: 50vw;
            font-size: 1em;
            font-weight: normal;
            border: 2px solid white;
        }
    }
}

.blinking {
    animation: 1s blink ease infinite;
    display: inline-block;
    margin-left: 1em;
    font-size: 0.5em;
    transform: translateY(0.15em);
}

@keyframes blink {
    from,
    to {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
