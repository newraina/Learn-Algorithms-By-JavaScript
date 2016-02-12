var expect = require('chai').expect;
var Queue  = require('../src/queue');

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
