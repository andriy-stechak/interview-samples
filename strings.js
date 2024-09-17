function reverseStr(str) {
    const res = []

    for (const s of str) {
        res.unshift(s)
    }

    return res.join('')
}

function reverseStrV2(str, res = '') {
    if (!str) {
        return res
    }

    return reverseStrV2(str.slice(0, str.length - 1), res + str.slice(-1))
}

console.log(reverseStr('Hello world!')) // !dlrow olleH
console.log(reverseStrV2('Hello world!')) // !dlrow olleH
console.log([...'Hello world!'].reverse().join('')) // !dlrow olleH