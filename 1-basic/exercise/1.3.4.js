"use strict";

var Stack = require('../src/stack');

/**
 * 判断括号是否配对完整
 * @param brackets {string} 括号序列构成的字符串
 */
function test(brackets) {
    let stack         = new Stack();
    let len           = brackets.length;
    let rightBrackets = ')]}';
    for (let i = 0; i < len; i++) {
        let item = brackets[i];
        if (rightBrackets.includes(item)) {
            let tempItem = stack.pop();
            return !!(tempItem === '(' && item === ')' || tempItem === '[' && item === ']' || tempItem === '{' && item === '}');
        } else {
            stack.push(item);
        }
    }
    return false;
}

console.log(test('{'));
