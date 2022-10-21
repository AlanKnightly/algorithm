/**
 * get
 * put
 */

class MyLRU {
  constructor(capacity){
    this.capacity = capacity
    this.fieldQueen = []
    this.cache = new Map()
  }
  get(key){
    return this.cache.get(key) || -1
  }
  

}