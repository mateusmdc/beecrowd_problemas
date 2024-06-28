// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split('\n');

lines = parseInt(lines);

console.log(`${Math.floor(lines/365)} ano(s)`);
console.log(`${Math.floor((lines%365)/30)} mes(es)`);
console.log(`${Math.floor((lines%365)%30)} dia(s)`);