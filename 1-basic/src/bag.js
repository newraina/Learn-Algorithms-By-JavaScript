"use strict";

var Node = require('./node');

/**
 * 背包的实现
 * 背包可以看成是去掉了删除方法的堆栈
 * @constructor
 */

let Bag = (function () {
    let n       = Symbol();
    let first   = Symbol();
    let current = Symbol();

    class Bag {
        constructor() {
            this[n]       = 0;
            this[first]   = null;
        }

        add(item) {
            var oldFirst     = this[first];
            this[first]      = new Node();
            this[first].item = item;
            this[first].next = oldFirst;
            this[n]++;
        }

        isEmpty() {
            return this[n] === 0;
        }

        size() {
            return this[n];
        }

        hasNext() {
            if (this[current] === undefined) {
                this[current] = this[first];
            }
            return this[current] !== null;
        }

        next() {
            if (this.hasNext()) {
                var item      = this[current].item;
                this[current] = this[current].next;
                return item;
            }
        }
    }

    return Bag;
})();

module.exports = Bag;
