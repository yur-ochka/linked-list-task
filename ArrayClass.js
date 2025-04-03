class ArrayClass {
  constructor() {
    this.data = [];
  }

  length() {
    return this.data.length;
  }

  append(element) {
    this.data.push(element);
  }

  insert(element, index) {
    if (index < 0 || index > this.data.length) {
      throw new Error("Index is not correct");
    }
    this.data.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index is not correct");
    }
    return this.data.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.data = this.data.filter((e) => e !== element);
  }

  get(index) {
    if (index < 0 || index >= this.data.length) {
      throw new Error("Index is not correct");
    }
    return this.data[index];
  }

  clone() {
    const newList = new ArrayClass();
    newList.data = [...this.data];
    return newList;
  }

  reverse() {
    this.data.reverse();
  }

  findFirst(element) {
    return this.data.indexOf(element);
  }

  findLast(element) {
    return this.data.lastIndexOf(element);
  }

  clear() {
    this.data = [];
  }

  extend(elements) {
    this.data = [...this.data, ...elements.data];
  }

  getFullList() {
    return this.data;
  }
}

module.exports = ArrayClass;
