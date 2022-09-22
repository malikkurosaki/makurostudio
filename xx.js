const brain = require('brain.js');
const data = require('./xdata.json');
const fs = require('fs');

const network = new brain.recurrent.LSTM();

const trainData = data.map((e) => ({
    input: e.text,
    output: e.category
}));

network.train(trainData, {
    log: err => console.log(err),
    iterations: 1000
});

const networkState = network.toJSON();
fs.writeFileSync('xnetwork_state.json', JSON.stringify(networkState), "utf-8");
console.log("berhasil");
