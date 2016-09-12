﻿
'use strict';

var a = 1;

// оператор Spread и оставшиеся параметры
function printNum(a, ...args) {
    document.write(`${a},${args.map((arg) => `${arg}`)},`);
}
printNum(a, 2, 3);


var args_1 = [4, 5, 6];
function printNum_1(...args) {
    document.write(`${args.map((arg => `${arg}`))} `);
}

printNum_1(args_1);
