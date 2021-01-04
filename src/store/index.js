import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

const API_NATIONAL_DATA_URL = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json'
const API_REGIONS_DATA_URL = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		nationalData: null,
		regionsData: null
	},
	mutations: {
		setNewStats(state, payload) {
			state.nationalData = payload.nationalData;
			state.regionsData = payload.regionsData;
		}
	},
	actions: {
		async load({ commit }) {
			const nationalData = (await axios.get(API_NATIONAL_DATA_URL)).data;
			const regionsData = (await axios.get(API_REGIONS_DATA_URL)).data;
			commit('setNewStats', {nationalData, regionsData})
		}
	},
	modules: {}
});
