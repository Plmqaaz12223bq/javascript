'use strict'

let g = 5;
let string = "";
for (let x = 1; x <= g; x++) {
  for (let Y = 0; y < x; y++) {
    string += "*";
  }
  string += "\g";
}
console.log(string);