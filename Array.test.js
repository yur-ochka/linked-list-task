const ArrayList = require("./ArrayClass");

describe("ArrayList", () => {
  let list;

  beforeEach(() => {
    list = new ArrayList();
  });

  test("should append elements correctly", () => {
    list.append(1);
    list.append(2);
    expect(list.length()).toBe(2);
  });

  test("should insert element at correct position", () => {
    list.append(1);
    list.append(3);
    list.insert(2, 1);
    expect(list.get(1)).toBe(2);
  });

  test("should delete element by index", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.delete(1)).toBe(2);
    expect(list.length()).toBe(2);
  });

  test("should delete all occurrences of element", () => {
    list.append(1);
    list.append(2);
    list.append(1);
    list.deleteAll(1);
    expect(list.length()).toBe(1);
    expect(list.get(0)).toBe(2);
  });

  test("should return correct first and last index", () => {
    list.append(1);
    list.append(2);
    list.append(1);
    expect(list.findFirst(1)).toBe(0);
    expect(list.findLast(1)).toBe(2);
  });

  test("should clone list correctly", () => {
    list.append(1);
    const clone = list.clone();
    expect(clone.get(0)).toBe(1);
    expect(clone.length()).toBe(1);
  });

  test("should clear list correctly", () => {
    list.append(1);
    list.clear();
    expect(list.length()).toBe(0);
  });

  test("should extend list correctly", () => {
    list.append(4);
    list.append(5);
    list.append(6);
    newList = new ArrayList();
    newList.append(1);
    newList.append(2);
    newList.append(3);
    list.extend(newList);
    expect(list.length()).toBe(6);
    expect(list.getFullList()).toStrictEqual([4, 5, 6, 1, 2, 3]);
  });

  test("should reverse list correctly", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.reverse();
    expect(list.getFullList()).toStrictEqual([3, 2, 2]);
  });
});
