// When executing the code locally Remeber to:
//  -> remove the . before /dev and 'txt' after stdin when submitting to beecrowd (or when uploading to github, but that is optional)
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.trim().split(' ');

const [a,b,c,d] = [...lines.map(Number)];

if(b>c && d>a && (c+d) > (a+b) && c>0 && d>0 && (a%2) === 0){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}