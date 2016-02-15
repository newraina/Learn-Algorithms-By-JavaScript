"use strict";

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
