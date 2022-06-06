/**
 * url: https://leetcode-cn.com/problems/lru-cache/solution/lru-ce-lue-xiang-jie-he-shi-xian-by-labuladong/
 * 1、显然 cache 中的元素必须有时序，以区分最近使用的和久未使用的数据，
 *   当容量满了之后要删除最久未使用的那个元素腾位置。
 * 2、我们要在 cache 中快速找某个 key 是否已存在并得到对应的 val；
 * 
 * 3、每次访问 cache 中的某个 key，需要将这个元素变为最近使用的，
 *   也就是说 cache 要支持在任意位置快速插入和删除元素。
 * 
 * 那么，什么数据结构同时符合上述条件呢？哈希表查找快，但是数据无固定顺序；
 * 链表有顺序之分，插入删除快，但是查找慢。
 * 所以结合一下，形成一种新的数据结构：哈希链表 LinkedHashMap。
 */



/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
// LRUCache.prototype.get = function(key) {
//    const value = this.cache.get(key)
//    if(value===undefined){
//      return -1
//    }
//    this.cache.delete(key)
//    this.cache.set(key, value)
//    return value
// };

LRUCache.prototype.get = function(key) {
  if(!this.cache.has(key)){
    return -1
  }
  const value = this.cache.get(key)
  this.cache.delete(key)
  this.cache.set(key, value)
  return value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.cache.has(key)){
    this.cache.delete(key)
    this.cache.set(key,value)
  }else{
    if(this.cache.size === this.capacity){
      const oldKey = this.cache.keys().next().value
      this.cache.delete(oldKey)
    }
    this.cache.set(key,value)
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


