var Node = require('./node');

/**
 * 下压堆栈的实现，依赖单向链表
 * js中的数组自带push和pop方法，是更自然的堆栈
 * @constructor
 */
function Stack() {
    // 缺点：这两变量暴露在外了
    this.n     = 0;
    this.first = null;
}

Stack.prototype.isEmpty = function () {
    return this.n === 0;
    // 或者：
    // return first === null;
};

Stack.prototype.size = function () {
    return this.n;
};

// 向栈顶添加元素
Stack.prototype.push = function (item) {
    var oldFirst = this.first;

    this.first      = new Node();
    this.first.item = item;
    this.first.next = oldFirst;

    this.n++;
};

// 从栈顶删除元素
Stack.prototype.pop = function () {
    if(this.isEmpty()) return;

    var item   = this.first.item;
    this.first = this.first.next;
    this.n--;

    return item;
};

module.exports = Stack;
