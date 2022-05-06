var zigzagLevelOrder = function (root) {
    const stack = [], result = [];
    let fromLeft = false
    if (root) {
        stack.push(root)
    }
    while (stack.length) {
        const len = stack.length
        const levelValues = []
        for (let i = 0; i < len; i++) {
            const node = stack.shift()
            levelValues[fromLeft ? 'unshift' : 'push'](node.val)
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
        }
        result.push(levelValues)
        fromLeft = !fromLeft
    }
    return result
};