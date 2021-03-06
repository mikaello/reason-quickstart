// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

function unwrap(v) {
  var match;
  switch (v.tag | 0) {
    case 0 : 
        match = /* tuple */[
          v[0],
          "em"
        ];
        break;
    case 1 : 
        match = /* tuple */[
          v[0],
          "rem"
        ];
        break;
    case 2 : 
        match = /* tuple */[
          v[0],
          "px"
        ];
        break;
    case 3 : 
        match = /* tuple */[
          v[0],
          "vw"
        ];
        break;
    case 4 : 
        match = /* tuple */[
          v[0],
          "vh"
        ];
        break;
    
  }
  return String(match[0]) + match[1];
}

function unwrapOpt(__x) {
  return Belt_Option.map(__x, unwrap);
}

var CssUnit = /* module */[
  /* unwrap */unwrap,
  /* unwrapOpt */unwrapOpt
];

function make(minWidth, maxWidth, minHeight, maxHeight, _) {
  var tmp = { };
  var tmp$1 = Belt_Option.map(minWidth, unwrap);
  if (tmp$1 !== undefined) {
    tmp.minWidth = Js_primitive.valFromOption(tmp$1);
  }
  var tmp$2 = Belt_Option.map(maxWidth, unwrap);
  if (tmp$2 !== undefined) {
    tmp.maxWidth = Js_primitive.valFromOption(tmp$2);
  }
  var tmp$3 = Belt_Option.map(minHeight, unwrap);
  if (tmp$3 !== undefined) {
    tmp.minHeight = Js_primitive.valFromOption(tmp$3);
  }
  var tmp$4 = Belt_Option.map(maxHeight, unwrap);
  if (tmp$4 !== undefined) {
    tmp.maxHeight = Js_primitive.valFromOption(tmp$4);
  }
  return tmp;
}

console.log(make(/* Em */Block.__(0, [45]), undefined, /* Rem */Block.__(1, [105]), undefined, /* () */0));

exports.CssUnit = CssUnit;
exports.make = make;
/*  Not a pure module */
