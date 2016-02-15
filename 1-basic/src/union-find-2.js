"use strict";

/**
 * 动态连通性问题， 第二版
 */

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
            let id = this[_id];
            while (p !== id[p]) {
                p = id[p];
            }
            return p;
        }

        union(p, q) {
            let pID = this.find(p);
            let qID = this.find(q);
            let id  = this[_id];

            if (pID === qID) return;

            id[pID] = qID;

            this[_count]--;
        }
    }

    return UF;
}());
