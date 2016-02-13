var Node = require('./node');

/**
 * 先进先出队列的实现
 * @constructor
 */
function Queue() {
    this.n     = 0;
    this.first = null;
    this.last  = null;
}

Queue.prototype.isEmpty = function () {
    return this.n === 0;
};

Queue.prototype.size = function () {
    return this.n;
};

// 向表尾添加元素
Queue.prototype.enqueue = function (item) {
    var newLast  = new Node();
    newLast.item = item;
    newLast.next = null;

    if (this.isEmpty()) {
        // 保证队列中只有一个元素时，first与last指向同一个元素
        this.first = this.last = newLast;
    } else {
        this.last.next = newLast;
        this.last      = newLast;
    }
    this.n++;
};

// 从表头删除元素
Queue.prototype.dequeue = function () {
    if (this.isEmpty()) return;

    var item   = this.first.item;
    this.first = this.first.next;
    this.n--;
    // 若删除一个元素后队列为空
    if (this.isEmpty()) {
        this.last = null;
    }
    return item;
};

module.exports = Queue;
