class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class ArrayClass {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index is not correct");
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      if (current.next) current.next.prev = newNode;
      current.next = newNode;
      newNode.prev = current;
    }
    this.size++;
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index is not correct");
    }
    let deletedValue;
    if (index === 0) {
      deletedValue = this.head.value;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      deletedValue = current.value;
      if (current.prev) current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
      if (current === this.tail) this.tail = current.prev;
    }
    this.size--;
    return deletedValue;
  }

  deleteAll(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.size--;
      }
      current = current.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index is not correct");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  clone() {
    const newList = new ArrayClass();
    let current = this.head;
    while (current) {
      newList.append(current.value);
      current = current.next;
    }
    return newList;
  }

  reverse() {
    let current = this.head;
    let temp = null;
    this.tail = this.head;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      if (!current.prev) {
        this.head = current;
      }
      current = current.prev;
    }
  }

  findFirst(value) {
    let index = 0;
    let current = this.head;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  findLast(value) {
    let index = this.size - 1;
    let current = this.tail;
    while (current) {
      if (current.value === value) return index;
      current = current.prev;
      index--;
    }
    return -1;
  }

  clear() {
    this.head = this.tail = null;
    this.size = 0;
  }

  extend(list) {
    let current = list.head;
    while (current) {
      this.append(current.value);
      current = current.next;
    }
  }

  getFullList() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

module.exports = ArrayClass;
