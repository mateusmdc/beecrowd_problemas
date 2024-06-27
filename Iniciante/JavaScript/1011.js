// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines.shift());

console.log(`VOLUME = ${((4/3) * 3.14159 * (r**3)).toFixed((3))}`);