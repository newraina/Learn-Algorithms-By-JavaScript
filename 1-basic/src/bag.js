var Node = require('./node');

/**
 * 背包的实现
 * 背包可以看成是去掉了删除方法的堆栈
 * @constructor
 */
function Bag() {
    this.n     = 0;
    this.first = null;
}

Bag.prototype = (function () {
    var current;

    return {
        constructor: Bag,

        hasNext: function () {
            if (current === undefined) {
                current = this.first;
            }
            return current !== null;
        },

        next: function () {
            if (this.hasNext()) {
                var item = current.item;
                current  = current.next;
                return item;
            }
        }
    }
})();

Bag.prototype.add = function (item) {
    var oldFirst    = this.first;
    this.first      = new Node();
    this.first.item = item;
    this.first.next = oldFirst;
    this.n++;
};

Bag.prototype.isEmpty = function () {
    return this.n === 0;
};

Bag.prototype.size = function () {
    return this.n;
};

module.exports = Bag;
