class Queue {
    constructor(...items) {
        this.queue = [...items];
    }

    enqueue(...items) {
        this.queue.push(...items);
    }

    dequeue() {
        return this.queue.shift();
    }
}

exports.createQueue = (...items) => {
    return new Queue(...items);
};
