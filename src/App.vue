<template>
    <div id="app">
        <h1 class="title">
            Coronavirus
            <br />Live stats
        </h1>

        <p class="caption">Total world’s infected</p>
        <h2 class="number">{{infectedTotal}}</h2>

        <p class="caption">Total world’s deaths</p>
        <h2 class="number">{{deathsTotal}}</h2>

        <p class="caption">Italy’s infected</p>
        <h2 class="number">{{infectedItaly}}</h2>

        <p class="caption">Italy’s deaths</p>
        <h2 class="number">{{deathsItaly}}</h2>
    </div>
</template>

<script>
const domparser = new DOMParser();
export default {
    name: "App",
    data() {
        return {
            infectedTotal: 0,
            deathsTotal: 0,
            infectedItaly: 0,
            deathsItaly: 0
        };
    },
    async created() {
        // Get webpage HTML
        const rawData = await fetch(
            "https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/"
        );
        const data = await rawData.text();
        const doc = domparser.parseFromString(data, "text/html");

        // Get total counts
        const mainCounterSpans = doc.querySelectorAll(
            ".maincounter-number span"
        );
        this.infectedTotal = mainCounterSpans[0].innerText;
        this.deathsTotal = mainCounterSpans[1].innerText;

        // Get Italy counts
        const table = doc.querySelectorAll("#table3 tbody tr");
        for (let i = 0; i < table.length; i++) {
            const row = table[i];
            const elements = row.querySelectorAll("td");
            const nation = elements[0].innerText;
            if (nation.trim() === "Italy") {
                this.infectedItaly = elements[1].innerText;
                this.deathsItaly = elements[3].innerText;
                break;
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
}
html {
    background: black;
}
#app {
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
        url("./assets/background.jpg");
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
    font-size: 2.8em;
    text-align: center;
    margin-bottom: 8vh;
    margin-top: 5vh;
}
.caption {
    font-size: 1.1em;
}
.number {
    font-size: 2.5em;
    margin-bottom: 3vh;
}
</style>