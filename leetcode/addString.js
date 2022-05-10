var addStrings = function (num1, num2) {
    const num1arr = num1.split('').map(Number).reverse()
    const num2arr = num2.split('').map(Number).reverse()
    const len = Math.max(num1.length, num2.length)
    const result = []
    let haveOverflow = 0
    for (let i = 0; i < len; i++) {
        const p1 = num1arr[i] || 0
        const p2 = num2arr[i] || 0
        let sum = p1 + p2 + haveOverflow
        haveOverflow = 0
        if (sum > 9) {
            haveOverflow = 1
            sum = sum - 10
        }
        result.push(sum)
    }
    if (haveOverflow) {
        result.push(1)
    }
    return result.reverse().join('')
};

const num1 = "19", num2 = "123"
const sum = addStrings(num1, num2)

console.log(sum)