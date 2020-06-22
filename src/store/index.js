import Vue from 'vue';
import Vuex from 'vuex';
const domparser = new DOMParser();
const storage = window.localStorage;

Vue.use(Vuex);

async function getData(url) {
	// Get webpage HTML
	const rawData = await fetch(url);
	const data = await rawData.text();
	const doc = domparser.parseFromString(data, 'text/html');

	// Get total counts
	const mainCounterSpans = doc.querySelectorAll('.maincounter-number span');
	const infected = mainCounterSpans[0].innerText;
	const deaths = mainCounterSpans[1].innerText;

	return { infected, deaths };
}

export default new Vuex.Store({
	state: {
		infectedTotal: 0,
		deathsTotal: 0,
		infectedItaly: 0,
		deathsItaly: 0
	},
	mutations: {
		setNewStats(state, payload) {
			state.infectedTotal = payload.infectedTotal;
			state.deathsTotal = payload.deathsTotal;
			state.infectedItaly = payload.infectedItaly;
			state.deathsItaly = payload.deathsItaly;
		}
	},
	actions: {
		async load({ commit }) {
			// Set local stats for fast preview
			const localStats = {
				infectedTotal: storage.getItem('infectedTotal'),
				deathsTotal: storage.getItem('deathsTotal'),
				infectedItaly: storage.getItem('infectedItaly'),
				deathsItaly: storage.getItem('deathsItaly')
			};

			if (
				localStats.infectedTotal &&
				localStats.deathsTotal &&
				localStats.infectedItaly &&
				localStats.deathsItaly
			) {
				commit('setNewStats', localStats);
			}

			// Fetch new data
			const { deaths: deathsTotal, infected: infectedTotal } = await getData(
				'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/'
			);

			const { deaths: deathsItaly, infected: infectedItaly } = await getData(
				'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/country/italy/'
			);

			storage.setItem('infectedTotal', infectedTotal);
			storage.setItem('deathsTotal', deathsTotal);
			storage.setItem('infectedItaly', infectedItaly);
			storage.setItem('deathsItaly', deathsItaly);

			commit('setNewStats', { infectedTotal, deathsTotal, infectedItaly, deathsItaly });
		}
	},
	modules: {}
});
