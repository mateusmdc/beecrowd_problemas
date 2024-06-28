// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split(' ');

const [a,b,c] = [...lines.map(Number)];

let delta = (b**2) - 4*a*c;

if( a === 0 || delta < 0){
    console.log('Impossivel calcular');
}else{
    let r1 = (-Math.abs(b) + Math.sqrt(delta))/(2*a);
    let r2 = (-Math.abs(b) - Math.sqrt(delta))/(2*a);
    console.log(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`);
}