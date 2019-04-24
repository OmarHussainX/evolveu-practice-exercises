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

var loopWithEach = function loopWithEach(staffArray) {
  var emailArray = [];
  staffArray.forEach(function (person) {
    return emailArray.push((0, _practice5MakeEmailObj.makeEmailObj)(person));
  });
  return emailArray;
};

var loopWithMap = function loopWithMap(staffArray) {
  return staffArray.map(function (person) {
    return (0, _practice5MakeEmailObj.makeEmailObj)(person);
  });
}; // and before this comment ---


console.log('-----emailWithEach');
var emailWithEach = loopWithEach(data.staff); // console.log(emailWithEach);

(0, _practice3AssertEquals.assertEquals)('Jane.Smith@evolveu.ca', emailWithEach[0]);
(0, _practice3AssertEquals.assertEquals)('Olivia.Notly@evolveu.com', emailWithEach[3]);
(0, _practice3AssertEquals.assertEquals)('Benjamin.Amis@evolveu.ca', emailWithEach[6]);
console.log('-----emailWithMap');
var emailWithMap = loopWithMap(data.staff); // console.log(emailWithMap);

(0, _practice3AssertEquals.assertEquals)('Jane.Smith@evolveu.ca', emailWithMap[0]);
(0, _practice3AssertEquals.assertEquals)('Olivia.Notly@evolveu.com', emailWithMap[3]);
(0, _practice3AssertEquals.assertEquals)('Benjamin.Amis@evolveu.ca', emailWithMap[6]);