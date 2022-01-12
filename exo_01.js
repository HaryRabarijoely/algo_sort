//Algo O(n2)

/*const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

let count;

const firstExo = (k,list) => {
  count = 0;
  for (let i = 0; i < list.length-1; i++){
    for (let j = 1; j < list.length; j++){
      count++;
      if ((list[i] + list[j]) == k) { 
          //console.log(`${count} comparaisons`);
           return true 
        }
    }
  }
  //console.log(`${count} comparaisons`)
  return false
}

console.log(firstExo(17, list))
//console.log(firstExo(list, 19))*/

const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

const k = 17;

class FirstExo {
  constructor(list, k) {
    this.list = list;
    this.k = k;
    this.count = 0;
    this.sort();
  }
  sort() {
    let res = false;
    for (let i = 0; i < this.list.length - 1; i++) {
      for (let j = 1; j < this.list.length; j++) {
        this.count++;
        if (this.list[i] + this.list[j] === this.k) {
          return console.log(
            (res = true + ` : avec  ${this.count} comparaisons`)
          );
        }
      }
      return console.log(res + ` : avec  ${this.count} comparaisons`);
    }
  }
}
new FirstExo(list, k);
