// Algo O(n)

const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

class FourthExo {
    constructor(list) {
      this.list = list;
      this.buildcount = 0;
      this.count = 0;
      this.sort(this.list);
    }
  
    sort(list, n = 0) {
      let res = true;
      for (let i = n + 1; i < list.length; i++) {
        this.count++;
        if (list[n] < list[i]) {
          res = false;
        }
      }
      if (res) {
        this.buildcount++;
      }
      if (n >= list.length - 1) {
        return console.log(
          `${this.buildcount} immeubles voient le coucher du soleil avec ${this.count} comparaisons`);
      } else {
        return this.sort(list, n + 1);
      }
    }
  }
  
  new FourthExo(list);