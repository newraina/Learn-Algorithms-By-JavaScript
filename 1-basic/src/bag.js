"use strict";

let Stack = require('./stack');

/**
 * 背包的实现
 * 背包可以看成是去掉了删除方法的堆栈
 * @constructor
 */

let Bag = (function () {
    let current = Symbol();
    let stack   = Symbol();

    class Bag {
        constructor() {
            this[stack] = new Stack();
        }

        add(item) {
            this[stack].push(item);
        }

        isEmpty() {
            return this[stack].isEmpty();
        }

        size() {
            return this[stack].size();
        }

        hasNext() {
            if (this[current] === undefined) {
                this[current] = this[stack].first;
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
}());

module.exports = Bag;
