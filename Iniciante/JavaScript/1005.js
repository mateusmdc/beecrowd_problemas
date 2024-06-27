// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines.shift())
var b = parseFloat(lines.shift())

console.log(`MEDIA = ${(((a*3.5)+(b*7.5))/11).toFixed(5)}`)