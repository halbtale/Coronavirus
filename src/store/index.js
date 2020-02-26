import Vue from 'vue';
import Vuex from 'vuex';
const domparser = new DOMParser();
const storage = window.localStorage;

Vue.use(Vuex);

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
            let infectedTotal, deathsTotal, infectedItaly, deathsItaly;

            infectedTotal = storage.getItem('infectedTotal');
            deathsTotal = storage.getItem('deathsTotal');
            infectedItaly = storage.getItem('infectedItaly');
            deathsItaly = storage.getItem('deathsItaly');

            if (infectedTotal && deathsTotal && infectedItaly && deathsItaly) {
                commit('setNewStats', { infectedTotal, deathsTotal, infectedItaly, deathsItaly });
            }

            // Get webpage HTML
            const rawData = await fetch(
                'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/'
            );
            const data = await rawData.text();
            const doc = domparser.parseFromString(data, 'text/html');

            // Get total counts
            const mainCounterSpans = doc.querySelectorAll('.maincounter-number span');
            infectedTotal = mainCounterSpans[0].innerText;
            deathsTotal = mainCounterSpans[1].innerText;

            // Get Italy counts
            const table = doc.querySelectorAll('#table3 tbody tr');
            for (let i = 0; i < table.length; i++) {
                const row = table[i];
                const elements = row.querySelectorAll('td');
                const nation = elements[0].innerText;
                if (nation.trim() === 'Italy') {
                    infectedItaly = elements[1].innerText;
                    deathsItaly = elements[3].innerText;
                    break;
                }
            }

            storage.setItem('infectedTotal', infectedTotal);
            storage.setItem('deathsTotal', deathsTotal);
            storage.setItem('infectedItaly', infectedItaly);
            storage.setItem('deathsItaly', deathsItaly);

            commit('setNewStats', { infectedTotal, deathsTotal, infectedItaly, deathsItaly });
        }
    },
    modules: {}
});
