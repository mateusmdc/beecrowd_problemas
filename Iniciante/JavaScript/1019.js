// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split('\n');

console.log(`${Math.floor(lines/3600)}:${Math.floor((lines%3600)/60)}:${Math.floor((lines%3660)%60)}`);