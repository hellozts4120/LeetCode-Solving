/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let target = {
        '[' : ']',
        '{' : '}',
        '(' : ')'
    };
    
    for (let i = 0; i < s.length; i++) {
        if (!stack.length) {
            if (target[s[i]] === undefined) {
                return false;
            }
            stack.push(s[i]);
        } else {
            if ((s[i] === target[stack[stack.length - 1]])) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        }
    }
    
    return !stack.length;
};