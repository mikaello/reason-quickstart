// Generated by BUCKLESCRIPT VERSION 4.0.3, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

console.log("Using Belt:", Belt_Array.map(/* array */[
          1,
          2,
          3
        ], (function (x) {
            return x + 1 | 0;
          })));

console.log("Using standard lib:", $$Array.map((function (x) {
            return x + 1 | 0;
          }), /* array */[
          1,
          2,
          3
        ]));

console.log("Again using Belt:", Belt_Array.keep(Belt_Array.range(1, 23), (function (x) {
            return x % 3 === 0;
          })));

/*  Not a pure module */
