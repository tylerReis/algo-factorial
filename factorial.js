function factorial(num) {
  let answer = 1
  for (let i = num; i > 0; i--){
    answer *= i
  }
  return answer
}

module.exports = factorial;
console.log(factorial(18))
