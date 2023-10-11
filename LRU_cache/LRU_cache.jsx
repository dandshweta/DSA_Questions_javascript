let LRUCache = function (key) {
  this.capacity = capacity;
  this.map = new Map();
};
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  } else {
    return -1;
  }
};
LRUCache.prototype.put = function (key, value) {
  const prevVal = this.get(key);
  if (prevVal === -1) {
    if (this.map.size === this.capacity) {
      for (let [firstKey] of this.map) {
        this.map.delete(firstKey);
        break;
      }
    }
  } else {
    this.map.set(key, value);
  }
};
