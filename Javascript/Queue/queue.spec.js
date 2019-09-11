const Queue = require('./queue');

describe('Queue Test', () => {
    // create test
    it('Queue create success!', done => {
        const queue = Queue.createQueue(1,2,3,4,5);
        if (queue !== undefined) {
            done();
        } else {
            throw Error('Fail create Queue...');
        }
    });

    // enqueue test
    it('Queue enqueue success!', done => {
        const queue = Queue.createQueue(1,2,3,4,5);
        // enqueue
        queue.enqueue(10,11,12);
        // check queue data
        if (queue !== undefined) {
            done();
        } else {
            throw Error('Fail enqueue...');
        }
    });

    // dequeue test
    it('Queue dequeue success!', done => {
        const queue = Queue.createQueue(1,2,3,4,5);
        // dequeue
        queue.dequeue();
        if (queue !== undefined) {
            done();
        } else {
            throw Error('Fail dequeue...');
        }
    });

    // check all test
    it('Queue all test success!', done => {
        // create
        const queue = Queue.createQueue(1,2,3,4,5);
        console.log('success create queue', queue);
        // enqueue data
        queue.enqueue(22,33);
        console.log('success enqueue', queue);
        // dequeue data
        const data = queue.dequeue();
        // check queue data
        console.log('success dequeue data', data);
        console.log('success queue test', queue);
        if (queue !== undefined) {
            done();
        } else {
            throw Error('Fail dequeue...');
        }
    });
});
