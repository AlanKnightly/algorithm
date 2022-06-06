function Node(key,value){
  this.key = key
  this.value = value
  this.prev = this.next = null
}

class DoubleLinkList{
  constructor(capacity){
    this.head = new Node(0,0)
    this.tail = new Node(0,0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.capacity = capacity
    this.size = 0
  }
  removeFirst(){
    const firstNode = this.head.next
    firstNode.prev = null
    this.head.next = firstNode.next
    firstNode.next = null
    this.head.next.prev = this.head
    this.size = this.size-1
  }
  addToTail(key,value){
    if(this.size === this.capacity){
      this.removeFirst()
    }else{
      this.size = this.size+1
    }
    const node = new Node(key,value)
    this.tail.prev.next = node
    node.prev = this.tail.prev
    node.next = this.tail
  }
}

class MyLRU{
  constructor(capacity){
    this.map = new Map()
    this.cache = new DoubleLinkList(capacity)
  }
  get(key){
    const value = this.map.get(key)
    if(!value){
      return -1
    }else{
      return value
    }
  }
}