/**
 * 动态连通性问题， 第三版
 */

let fs = require('fs');

let UF = (function () {
    let _count = Symbol();
    let _id    = Symbol();

    class UF {
        constructor(n) {
            let count = this[_count] = n;
            let id = this[_id] = [];
            for (let i = 0; i < count; i++) {
                id.push({root: i, size: 1});
            }
        }

        count() {
            return this[_count];
        }

        connected(p, q) {
            return this.find(p) === this.find(q);
        }

        find(p) {
            let id = this[_id];
            while (p !== id[p].root) {
                p = id[p].root;
            }
            return p;
        }

        union(p, q) {
            let pID = this.find(p);
            let qID = this.find(q);
            let id  = this[_id];

            if (pID === qID) return;

            if(id[pID].size < id[qID].size) {
                id[pID].root = qID;
                id[qID].size += id[pID].size;
            } else {
                id[qID].root = pID;
                id[pID].size += id[qID].size;
            }

            this[_count]--;
        }
    }

    return UF;
})();

// 读取数据测试算法
fs.readFile('mediumUF.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }

    let lines  = data.toString().split('\n').map(function (value) {
        return value.split(' ').map(Number);
    });
    let n      = lines[0];
    let testUF = new UF(n);
    let pre    = new Date();
    for (let i = 1; i < lines.length; i++) {
        let singleLine = lines[i];
        if (singleLine.length === 2) {
            testUF.union(singleLine[0], singleLine[1]);
        }
    }
    console.log('用时：' + (new Date() - pre) + '毫秒');
});