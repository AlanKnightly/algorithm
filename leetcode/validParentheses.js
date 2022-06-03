const log = console.log

var isValid = function (s) {
    const matchStack = []
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] in map) {
            matchStack.push(map[s[i]])
        } else {
            if (matchStack.length === 0 || matchStack.pop() !== s[i]) return false
        }
    }
    return matchStack.length === 0
};

const input = "()"

log(isValid(input)) 