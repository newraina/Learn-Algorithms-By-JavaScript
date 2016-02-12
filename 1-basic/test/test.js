var expect = require('chai').expect;
var Queue  = require('../src/queue');
var Stack  = require('../src/stack');
var Bag    = require('../src/bag');

describe('队列测试', function () {
    var queue;
    before(function () {
        queue = new Queue();
    });

    it('检查空队列', function () {
        expect(queue.size()).to.equal(0);
        expect(queue.isEmpty()).to.be.true;
        expect(queue.first).to.equal(queue.last);
    });

    it('向空队列添加元素', function () {
        queue.enqueue(1);
        expect(queue.size()).to.equal(1);
        expect(queue.isEmpty()).to.be.false;
        expect(queue.first).to.equal(queue.last);
        expect(queue.last.next).to.be.null;
    });

    it('向非空队列添加元素', function () {
        queue.enqueue(2);
        expect(queue.size()).to.equal(2);
        expect(queue.isEmpty()).to.be.false;
        expect(queue.first).to.not.equal(queue.last);
        expect(queue.first.item).to.equal(1);
        expect(queue.first.next.item).to.equal(2);
        expect(queue.last.item).to.equal(2);
        expect(queue.last.next).to.be.null;
    });

    it('从非空队列删除元素', function () {
        var item = queue.dequeue();
        expect(item).to.equal(1);
        expect(queue.size()).to.equal(1);
        expect(queue.isEmpty()).to.be.false;
        expect(queue.first).to.equal(queue.last);
        expect(queue.first.item).to.equal(2);
        expect(queue.last.next).to.be.null;
    });

    it('从空队列删除元素', function () {
        queue.dequeue();
        var item = queue.dequeue();
        expect(item).to.be.undefined;
        expect(queue.size()).to.equal(0);
        expect(queue.isEmpty()).to.be.true;
        expect(queue.first).to.equal(queue.last);
        expect(queue.first).to.be.null;
    });
});

describe('堆栈测试', function () {
    var stack;
    before(function () {
        stack = new Stack();
    });

    it('检查空堆栈', function () {
        expect(stack.size()).to.equal(0);
        expect(stack.isEmpty()).to.be.true;
        expect(stack.first).to.be.null;
    });

    it('向空堆栈添加元素', function () {
        stack.push(1);
        expect(stack.size()).to.equal(1);
        expect(stack.isEmpty()).to.be.false;
        expect(stack.first.item).to.equal(1);
        expect(stack.first.next).to.be.null;
    });

    it('向非空堆栈添加元素', function () {
        stack.push(2);
        expect(stack.size()).to.equal(2);
        expect(stack.isEmpty()).to.be.false;
        expect(stack.first.next.item).to.equal(1);
    });

    it('从非空堆栈删除元素', function () {
        var item = stack.pop();
        expect(item).to.equal(2);
        expect(stack.size()).to.equal(1);
        expect(stack.isEmpty()).to.be.false;
        expect(stack.first.item).to.equal(1);
    });

    it('从空堆栈删除元素', function () {
        stack.pop();
        var item = stack.pop();
        expect(item).to.be.undefined;
        expect(stack.size()).to.equal(0);
        expect(stack.isEmpty()).to.be.true;
        expect(stack.first).to.be.null;
    });
});

describe('背包测试', function () {
    var bag = new Bag();

    it('检查空背包', function () {
        expect(bag.hasNext()).to.be.false;
        expect(bag.isEmpty()).to.be.true;
    });

    it('向背包添加元素', function () {
        for (var i = 0; i < 10; i++) {
            bag.add(i);
            expect(bag.size()).to.equal(i + 1);
        }
        var j = 0;
        while (bag.hasNext()) {
            j++;
            expect(bag.next()).equal(j);
        }
    })
});
