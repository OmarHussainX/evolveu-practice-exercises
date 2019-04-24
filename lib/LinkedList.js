"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedList = void 0;

var _Node = require("./Node");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 

This class defines a *positional* singly-linked list of Node objects...

Empty list:
    'head', 'tail', 'position' are null and 'length' is 0

Non-empty list:
    'head'      - points to the first element of the list
    'tail'      - points to the last element of the list
    'position'  - points to the 'current Node'. The current Node is always the 
                  *last* element of the list, until 'position' is moved via
                  one of the positional methods to point to another Node:
                    first(), last(), next(), previous()
                - controls insert() and delete():
                    insert() inserts a new Node after the current Node
                    delete() removes the current Node
    'length' - the number of Nodes in the list

NOTE: The way this list has been defined, the only way to change the 'head', or 'tail'
      or any Node in the list, really, is to move 'position' to the target Node, delete it,
      and then insert a new one if desired.

 */
var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.position = null;
    this.length = 0;
  } // Inserts a new Node containing 'data', after the current Node
  // - head always points to the front of the list
  // - tail always points to the end of the list
  // - position points to the current Node, which is always the tail (until
  //   the position is changed via one of the positional methods)


  _createClass(LinkedList, [{
    key: "insert",
    value: function insert() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      // Disallow addition of Nodes with no data...?
      if (data === null) return;
      var statusMsg = '__insert() '; // List is empty:
      // - create the first ('head') Node of the list, containing data,
      //   _linked_ to null
      // - update head, position, tail

      if (this.position === null) {
        this.position = this.head = this.tail = new _Node.Node(data, null);
        statusMsg += '__created new node: head';
      } // Current Node is the tail, insertion is to be done *after* the
      // current node, and after insertion, the inserted node becomes the
      // new tail, and the new current node:
      // - create Node containing data (_linked_ to null), which will be the new tail
      // - modify the current Node so that it _links_ to the new tail
      // - update tail and position to _point_ to the new Node, making it the new
      //   tail, and the new current Node
      else if (this.position === this.tail) {
          var oldTail = this.tail;
          this.tail = this.position = new _Node.Node(data, null);
          oldTail.next = this.tail;
          statusMsg += '__created new node: tail';
        } // Current Node is the head, or any Node *but* the tail, insertion
        // is to be done *after* the current node, and after insertion, 
        // the inserted node becomes the new current node:
        // - save a reference to the (soon to be old) current Node
        // - create new Node containing data, _linked_ to the (soon to be old) 
        //   current Node's next Node
        // - update position to _point_ to the newly created Node, making it the
        //   current node
        // - modify the *old* current Node so that it _links_ to the new current Node
        else {
            var oldCurrentNode = this.position;
            this.position = new _Node.Node(data, this.position.next);
            oldCurrentNode.next = this.position;
            statusMsg += "__added node after '{".concat(oldCurrentNode.data.subject, ", ").concat(oldCurrentNode.data.amount, "}'");
          } // A new Node was added to the list, increment length


      this.length += 1;
      console.log("".concat(statusMsg, ", length: ").concat(this.length));
    }
  }, {
    key: "status",
    value: function status() {
      if (this.head && this.position && this.tail) console.log("__ head: ".concat(this.head.data.subject, "\n__ position: ").concat(this.position.data.subject, "\n__ tail: ").concat(this.tail.data.subject, "\n"));
    }
  }, {
    key: "print",
    value: function print() {
      if (this.head === null) {
        console.log("--> empty list!\n");
        return;
      }

      var currentNode = this.head;
      var nodeNumber = 1;
      var statusMsg = '';

      while (currentNode !== null) {
        var keyNode = '';
        if (currentNode === this.head) keyNode += 'H ';
        if (currentNode === this.position) keyNode += 'P ';
        if (currentNode === this.tail) keyNode += 'T ';
        statusMsg += "--> ".concat(keyNode, "{").concat(currentNode.data.subject, ", ").concat(currentNode.data.amount, "} ");
        currentNode = currentNode.next;
        nodeNumber += 1;
      }

      console.log("".concat(statusMsg, "\n"));
    }
  }]);

  return LinkedList;
}();

exports.LinkedList = LinkedList;
//==============================================================
var newList = new LinkedList();
newList.print();
var testObj = {
  subject: 'banana',
  amount: 1
};
newList.insert(testObj);
newList.print();
var testObj2 = {
  subject: 'apple',
  amount: 2
};
newList.insert(testObj2);
newList.print();
var testObj3 = {
  subject: 'kiwi',
  amount: 3
};
newList.insert(testObj3);
newList.print();
var testObj4 = {
  subject: 'orange',
  amount: 4
};
newList.insert(testObj4);
newList.print();
var testObj5 = {
  subject: 'mango',
  amount: 5
};
newList.insert(testObj5);
newList.print();
console.log("* Moving 'position' to head, length is: ".concat(newList.length));
newList.position = newList.head;
newList.print();
var testObj6 = {
  subject: 'grape',
  amount: 6
};
newList.insert(testObj6);
newList.print();
console.log("* Moving 'position' up 2, length is: ".concat(newList.length));
newList.position = newList.position.next.next;
newList.print();
var testObj7 = {
  subject: 'seven',
  amount: 7
};
newList.insert(testObj7);
newList.print();
console.log("* Moving 'position' up 2, to tail, length is: ".concat(newList.length));
newList.position = newList.position.next.next;
newList.print();
var testObj8 = {
  subject: 'eight',
  amount: 8
};
newList.insert(testObj8);
newList.print();
var testObj9 = {
  subject: 'nine',
  amount: 9
};
newList.insert(testObj9);
newList.print();