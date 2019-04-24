"use strict";

var _practice3AssertEquals = require("./practice 3 (assertEquals)");

var _practice5MakeEmailObj = require("./practice 5 (makeEmailObj)");

var data = {
  staff: [{
    fname: "Jane",
    lname: "Smith",
    balance: 10
  }, {
    fname: "Liam",
    lname: "Henry",
    balance: 1000
  }, {
    fname: "Emma",
    lname: "Jones",
    balance: 1330
  }, {
    fname: "Olivia",
    lname: "Notly",
    balance: 310
  }, {
    fname: "Noah",
    lname: "Ho",
    balance: 503
  }, {
    fname: "William",
    lname: "Lee",
    balance: 520
  }, {
    fname: "Benjamin",
    lname: "Amis",
    balance: 150
  }],
  company: "EvolveU",
  city: "Calgary",
  prov: "Alberta" // Write the function after this comment ---

};

var loopWithForOf = function loopWithForOf(staffArray) {
  var emailArray = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = staffArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var person = _step.value;
      emailArray.push((0, _practice5MakeEmailObj.makeEmailObj)(person));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return emailArray;
};

var loopWithForIn = function loopWithForIn(staffArray) {
  var emailArray = []; // for...in iterates over the object's properties,
  // i.e. the array's indices

  for (var i in staffArray) {
    emailArray.push((0, _practice5MakeEmailObj.makeEmailObj)(staffArray[i]));
  }

  return emailArray;
}; // and before this comment ---


console.log('-----emailForOf');
var emailForOf = loopWithForOf(data.staff); // console.log(emailForOf);

(0, _practice3AssertEquals.assertEquals)('Jane.Smith@evolveu.ca', emailForOf[0]);
(0, _practice3AssertEquals.assertEquals)('Olivia.Notly@evolveu.com', emailForOf[3]);
(0, _practice3AssertEquals.assertEquals)('Benjamin.Amis@evolveu.ca', emailForOf[6]);
console.log('-----emailForIn');
var emailForIn = loopWithForIn(data.staff); // console.log(emailForIn);

(0, _practice3AssertEquals.assertEquals)('Jane.Smith@evolveu.ca', emailForIn[0]);
(0, _practice3AssertEquals.assertEquals)('Olivia.Notly@evolveu.com', emailForIn[3]);
(0, _practice3AssertEquals.assertEquals)('Benjamin.Amis@evolveu.ca', emailForIn[6]);