"use strict";
var input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
// var input = require("fs").readFileSync("input.txt", "utf8").trim().split('\n');

let cid = 0;
const getLine = (isStr = false) => { cid++; return isStr ? input[cid - 1].trim().split(" ") : input[cid - 1].split(" ").map(e => +e) }
const getLines = (n = 1, isStr = false) => { cid += n; return isStr ? input.slice(cid - n, cid).map(line => line.trim().split(" ")) : input.slice(cid - n, cid).map(line => line.split(" ").map(e => +e)) }
var streams = []; function print(s) { streams.push(s); }


function main() {
    let [A, B, C, X, Y] = getLine();

    let ansA = 0;
    let ansB = 0;
    let ansC = 0;
    let ans = Infinity;

    // Cを買う枚数で全探索
    for (ansC = 0; ansC <= Math.max(X, Y) * 2; ansC++) {
        ansA = Math.max(X - ansC / 2, 0);
        ansB = Math.max(Y - ansC / 2, 0);
        ans = Math.min(ans, ansA * A + ansB * B + ansC * C);
    }
    return ans;
}

var myOut = main();
if (myOut !== undefined) console.log(String(myOut));
if (streams.length) console.log(streams.join("\n"));