// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split('\n');

lines = parseFloat(lines);
int_part = parseInt(lines);
dec_part = parseInt((lines - int_part)*100);

console.log('NOTAS:');
console.log(`${Math.floor(lines/100)} nota(s) de R$ 100.00`);
console.log(`${Math.floor((lines%100)/50)} nota(s) de R$ 50.00`);
console.log(`${Math.floor(((lines%100)%50)/20)} nota(s) de R$ 20.00`);
console.log(`${Math.floor((((lines%100)%50)%20)/10)} nota(s) de R$ 10.00`);
console.log(`${Math.floor(((((lines%100)%50)%20)%10)/5)} nota(s) de R$ 5.00`);
console.log(`${Math.floor((((((lines%100)%50)%20)%10)%5)/2)} nota(s) de R$ 2.00`);
console.log('MOEDAS:')
console.log(`${Math.floor(((((((lines%100)%50)%20)%10)%5)%2)/1)} moeda(s) de R$ 1.00`);
console.log(`${Math.floor(dec_part/50)} moeda(s) de R$ 0.50`);
console.log(`${Math.floor((dec_part%50)/25)} moeda(s) de R$ 0.25`);
console.log(`${Math.floor(((dec_part%50)%25)/10)} moeda(s) de R$ 0.10`);
console.log(`${Math.floor((((dec_part%50)%25)%10)/5)} moeda(s) de R$ 0.05`);
console.log(`${Math.floor((((dec_part%50)%25)%10)%5)} moeda(s) de R$ 0.01`);