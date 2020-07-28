// 链表的基本操作

// 节点
class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.length = 0
    this.head = null
  }

  // 增加节点
  append (val) {
    let newNode = new Node(val)
    let p = null
    if (this.head === null) {
      this.head = newNode
    } else {
      p = this.head
      while (p.next) {
        p = p.next
      }
      p.next = newNode
    }
    this.lenght++
  }

  // 插入元素
  insert (position, val) {
    let newNode = new Node(val)
    if (position >= 0 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0
      if (position === 0) {
        newNode.next = current
        this.head = newNode
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        newNode.next = current
        previous.next = newNode
      }
      this.length++
      return true
    } else {
      return false
    }
  }
}


// 循环链表，尾节点指向头节点
