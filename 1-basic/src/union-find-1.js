"use strict";

/**
 * 动态连通性问题， 第一版
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
                id.push(i);
            }
        }

        count() {
            return this[_count];
        }

        connected(p, q) {
            return this.find(p) === this.find(q);
        }

        find(p) {
            return this[_id][p];
        }

        union(p, q) {
            let pID = this.find(p);
            let qID = this.find(q);

            if (pID === qID) return;

            let id  = this[_id];
            let len = id.length;
            for (let i = 0; i < len; i++) {
                if (id[i] === pID) {
                    id[i] = qID;
                }
            }
            this[_count]--;
            console.log(p + ', ' + q);
        }
    }

    return UF;
})();
