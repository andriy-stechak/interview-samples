class EventEmmiter {

    constructor() {
      this.handlers = new Map();
    }
  
    dispatch(name, ...args) {
      if (this.handlers.has(name)) {
        const handlers = this.handlers.get(name);
        for (let handler of handlers) {
          handler(...args);
        }
      }
    }
  
    on(name, cb) {
      if (!name || typeof name !== 'string') {
        throw new Error('Invalid name');
      }
      if (!cb || typeof cb !== 'function') {
        throw new Error('Invalid cb. cb must be function');
      }
      if (!this.handlers.has(name)) {
        this.handlers.set(name, new Set());
      }
      const listOfHandlers = this.handlers.get(name);
      listOfHandlers.add(cb);
      return this;
    }
  
    off(name, cb) {
      if (!name || typeof name !== 'string') {
        throw new Error('Invalid name');
      }
      if (!cb || typeof cb !== 'function') {
        throw new Error('Invalid cb. cb must be function');
      }
      if (!this.handlers.has(name)) {
        return false;
      }
      const listOfHandlers = this.handlers.get(name);
      listOfHandlers.delete(cb);
      return this;
    }
  }
  
  const ee = new EventEmmiter();
  const cb1 = function (...args) {
    console.log('cb1', args);
  };
  const cb2 = function (...args) {
    console.log('cb2', args);
  };
  
  ee.on('open', cb1)
    .on('open', cb1)
    .on('open', cb2);
  ee.dispatch('open', 1,3,5,6);
  ee.off('open', cb1);
  ee.dispatch('open');