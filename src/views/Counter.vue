<template>
    <div id="counter">
        <h1 class="title">
            Coronavirus
            <br />Live stats
        </h1>

        <p class="caption">Totale infetti nel mondo</p>
        <h2 class="number">{{ infectedTotal }}</h2>

        <p class="caption">Totale morti nel mondo</p>
        <h2 class="number">{{ deathsTotal }}</h2>

        <p class="caption">Totale infetti in Italia</p>
        <h2 class="number">{{ infectedItaly }}</h2>

        <p class="caption">Totale morti in Italia</p>
        <h2 class="number">{{ deathsItaly }}</h2>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "App",
    computed: {
        ...mapState([
            "infectedTotal",
            "deathsTotal",
            "infectedItaly",
            "deathsItaly"
        ])
    }
};
</script>

<style lang="scss" scoped>
#counter {
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
    margin-bottom: 8vh;
    margin-top: 5vh;
    @media only screen and (max-width: 700px) {
        font-size: 2.3em;
        margin-top: 30px;
    }
}
.caption {
    font-size: 1.1em;
}
.number {
    font-size: 2.5em;
    margin-bottom: 3vh;
}
</style>
