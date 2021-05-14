const lineBreaker = require('./line-breaker');

let result = lineBreaker.break('Um pequeno jabuti xereta viu dez cegonhas felizes.', 20)
let resultTotalLines = result.split('\n')

console.log(result)
console.log(resultTotalLines)