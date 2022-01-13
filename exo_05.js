// Algo un seul passage sur la liste

const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

const k = 17;

const sort = (list, k) => {  
  let i = 0;
  let count = 1;
  
  while (!list.includes(k - list[i]) && list.indexOf(k - list[i]) != i && i != list.length - 1) {
    count++;
    i++;
  }
  //console.log(`${count} comparaisons`)
  //return (i != list.length-1)
  return console.log((i != list.length-1) + ` : avec  ${count} comparaisons`);
}

sort(list, k);

