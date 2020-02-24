const domparser = new DOMParser();
export default {
    methods: {
        async load() {
            // Get webpage HTML
            const rawData = await fetch(
                'https://cors-anywhere.herokuapp.com/https://www.worldometers.info/coronavirus/'
            );
            const data = await rawData.text();
            const doc = domparser.parseFromString(data, 'text/html');

            // Get total counts
            const mainCounterSpans = doc.querySelectorAll('.maincounter-number span');
            this.infectedTotal = mainCounterSpans[0].innerText;
            this.deathsTotal = mainCounterSpans[1].innerText;

            // Get Italy counts
            const table = doc.querySelectorAll('#table3 tbody tr');
            for (let i = 0; i < table.length; i++) {
                const row = table[i];
                const elements = row.querySelectorAll('td');
                const nation = elements[0].innerText;
                if (nation.trim() === 'Italy') {
                    this.infectedItaly = elements[1].innerText;
                    this.deathsItaly = elements[3].innerText;
                    break;
                }
            }
        }
    }
};
