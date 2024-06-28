// This line is necessary to read a file to get the user input, is the filepath that Beecrowd uses
// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split(' ');

const [a,b,c] = [...lines.map(Number)];

console.log(`TRIANGULO: ${((a*c)/2).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * (c**2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a+b)*c)/2).toFixed(3)}`);
console.log(`QUADRADO: ${(b*b).toFixed(3)}`);
console.log(`RETANGULO: ${(a*b).toFixed(3)}`);