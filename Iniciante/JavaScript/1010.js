// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

var values = [];

lines.forEach(l => {
    values.push(l.trim().split(" "));
})

let [a,b,c,d,e,f] = [...values[0].map(Number), ...values[1].map(Number)];

console.log(`VALOR A PAGAR: R$ ${((b*c)+(e*f)).toFixed(2)}`);