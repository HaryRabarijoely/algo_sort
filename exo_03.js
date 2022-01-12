// algo O(n)

const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const list = data.split(' ').map((number) => Number.parseInt(number));

//const list = [10, 15, 3, 7];

const k = 18;

class ThirdExo {
    constructor(list, k){
        this.list = list;
        this.k = k;
        this.count = 0;
        this.sort();
    }
    sort(){
        let res = false;
        let i = 0;
        let j = list.length - 1;
        while (j > i){
            this.count++;
            if (this.list[i] + this.list[j] === this.k){
                return console.log(res = true + ` : avec  ${this.count} comparaisons`);
            }else if (this.list[i] + this.list[j] > this.k){
                j--;
                
            }else if (this.list[i] + this.list[j] < this.k){
                i++;
            }
        }
        return console.log(res = false + ` : avec  ${this.count} comparaisons`);
    }
}

new ThirdExo(list, k);