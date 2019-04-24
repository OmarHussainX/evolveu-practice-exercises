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

var loopStaff = function loopStaff(staffArray) {
  var emailArray = [];
  staffArray.forEach(function (person) {
    emailArray.push((0, _practice5MakeEmailObj.makeEmailObj)(person));
  });
  return emailArray;
}; // and before this comment ---


console.log('-----loopStaff');
var staffEmail = loopStaff(data.staff); // console.log(staffEmail)

(0, _practice3AssertEquals.assertEquals)('Jane.Smith@evolveu.ca', staffEmail[0]);
(0, _practice3AssertEquals.assertEquals)('Olivia.Notly@evolveu.com', staffEmail[3]);
(0, _practice3AssertEquals.assertEquals)('Benjamin.Amis@evolveu.ca', staffEmail[6]);