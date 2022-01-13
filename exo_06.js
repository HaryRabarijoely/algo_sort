// Algo un seul passage sur la liste

const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));


const sort = (list) => {
  let i = 0;
  count = 0;
  while (i < list.length-1) {
    if (list[i] <= list[i + 1]) { list.splice(i, 1) }
    else { i++ }
    count++;
  }
  //console.log(`${count} comparaison`)
  //return list.length
  return console.log(list.length + ` : immeubles voient le coucher du soleil avec ${count} comparaisons`);
}


sort(list);
