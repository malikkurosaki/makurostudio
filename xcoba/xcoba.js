#!/usr/bin/env node

// const meminta = require('./meminta.enc');
// meminta("hahha apa ini")
const fs = require('fs');
const obf = require('javascript-obfuscator');

const datanya = fs.readFileSync('./minta.js').toString();

const obfuscated = obf.obfuscate(datanya, './minta.min.js');

fs.writeFileSync('./meminta.enc', obfuscated.getObfuscatedCode());
console.log("Done!");

