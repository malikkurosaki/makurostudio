const brain = require('brain.js');
const fs = require('fs');
const statte = require('./xnetwork_state.json');
const network = new brain.recurrent.LSTM();

network.fromJSON(statte);
console.log(network.run('is working'))

