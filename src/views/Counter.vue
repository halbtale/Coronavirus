<template>
	<div id="counter">
		<h1 class="title">
			Coronavirus
			<br />Live stats
		</h1>

		<p class="caption">Ultimo aggiornamento</p>
		<h2 class="number">{{ lastUpdate }}</h2>

		<p class="caption">Nuovi infetti in Italia</p>
		<h2 class="number">{{ nationalInfectsIncrement }}</h2>

		<p class="caption">Nuovi infetti in Veneto</p>
		<h2 class="number">{{ venetoInfectsIncrement }}</h2>
	</div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
	name: "App",
	computed: {
		...mapState(["nationalData", "regionsData"]),
		lastUpdate() {
			if (!this.nationalData) return "LOADING...";
			const isoDateString = this.nationalData[0]["data"];
			const date = moment(isoDateString).locale("it");
			return date.format("D MMMM YYYY, HH:mm");
		},
		nationalInfectsIncrement() {
			if (!this.nationalData) return "LOADING...";
			return this.nationalData[0]["nuovi_positivi"];
		},
		nationalTestsIncrement() {
			if (!this.nationalData) return "LOADING...";
			return null;
		},
		venetoInfectsIncrement() {
			if (!this.regionsData) return "LOADING...";
			const venetoData = this.regionsData.find(
				(regionData) => regionData.denominazione_regione === "Veneto"
			);
			return venetoData["nuovi_positivi"];
		},
	},
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
