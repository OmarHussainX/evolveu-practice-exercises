"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Node =
/*#__PURE__*/
function () {
  function Node() {
    var nodeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var nextNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, Node);

    this.data = nodeData;
    this.next = nextNode;
  }

  _createClass(Node, [{
    key: "show",
    value: function show() {
      console.log("[".concat(this.data.subject, ", ").concat(this.data.amount, "]"));
    }
  }]);

  return Node;
}();

exports.Node = Node;