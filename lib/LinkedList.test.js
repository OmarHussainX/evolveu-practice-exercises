"use strict";

var _LinkedList = require("./LinkedList");

describe('Linked List', function () {
  test('is instantiated without issue', function () {
    var newList = null;
    newList = new _LinkedList.LinkedList();
    expect(newList).not.toBeNull();
  });
});
describe('Linked List', function () {
  test('adding Nodes', function () {
    var testObj = {
      subject: 'banana',
      amount: 5
    };
    var newList = new _LinkedList.LinkedList();
    newList.print();
    newList.insert(testObj);
    console.log("--> added first Node, length is: ".concat(newList.length));
    newList.print();
    /*         console.log(`--> head is:`)
            newList.head.show()
            console.log(`--> current node is:`)
            newList.position.show() */

    expect(newList.head).not.toBeNull();
    expect(newList.position).not.toBeNull();
    expect(newList.tail).not.toBeNull();
    expect(newList.length).toEqual(1);
    expect(newList.head.data.subject).toMatch(testObj.subject);
    expect(newList.head.data.amount).toEqual(testObj.amount);
    var testObj2 = {
      subject: 'apple',
      amount: 23
    };
    newList.insert(testObj2);
    console.log("--> added second Node, length is: ".concat(newList.length));
    newList.print();
    /*         console.log(`--> head is:`)
            newList.head.show()
            console.log(`--> current node is:`)
            newList.position.show()
            console.log(`--> tail is:`)
            newList.tail.show() */

    expect(newList.head.data.subject).toMatch(testObj.subject);
    expect(newList.head.data.amount).toEqual(testObj.amount);
    expect(newList.tail.data.subject).toMatch(testObj2.subject);
    expect(newList.tail.data.amount).toEqual(testObj2.amount);
    var testObj3 = {
      subject: 'kiwi',
      amount: 42
    };
    newList.insert(testObj3);
    console.log("--> added third Node, length is: ".concat(newList.length));
    newList.print();
    /*         console.log(`--> head is:`)
            newList.head.show()
            console.log(`--> current node is:`)
            newList.position.show()
            console.log(`--> tail is:`)
            newList.tail.show() */

    expect(newList.head.data.subject).toMatch(testObj.subject);
    expect(newList.head.data.amount).toEqual(testObj.amount);
    expect(newList.tail.data.subject).toMatch(testObj3.subject);
    expect(newList.tail.data.amount).toEqual(testObj3.amount);
  });
});