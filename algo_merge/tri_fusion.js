const fs = require('fs')

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');

const res = data.split(' ').map((number) => Number.parseInt(number));

function merge(left, right) {

    let res = [], l = 0, r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            res.push(left[l++]);
        } else {
            res.push(right[r++]);
        }
    }
    return res.concat(left.slice(l)).concat(right.slice(r));
}
function fusion(res) {
    if (res.length < 2) {
        return res;
    }
    let mid = Math.floor(res.length / 2),
        right = res.slice(mid),
        left = res.slice(0, mid),
        p = merge(fusion(left), fusion(right));

    p.unshift(0, res.length);
    res.splice.apply(res, p);
    return res;
}


console.log(fusion(res));