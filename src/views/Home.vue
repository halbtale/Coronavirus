<template>
    <div id="home">
        <h1 class="title">Coronavirus Info</h1>
        <main class="main">
            <router-link to="/counter" tag="div" class="link link--main">Live counter</router-link>
        </main>
        <section class="secondary">
            <router-link to="/info" tag="div" class="link link--secondary">Che cos'è?</router-link>
            <router-link
                to="/transmission"
                tag="div"
                class="link link--secondary"
            >Come si trasmette?</router-link>
            <router-link to="/prevention" tag="div" class="link link--secondary">Come proteggersi?</router-link>
        </section>
    </div>
</template>

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
    &--main {
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
</style>
