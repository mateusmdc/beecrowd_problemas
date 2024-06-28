// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split('\n');

var [x1,y1] = lines.shift().split(' ').map((item) => parseFloat(item));
var [x2,y2] = lines.shift().split(' ').map((item) => parseFloat(item));

const distancia = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));

console.log(distancia.toFixed(4));