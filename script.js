
let sum_odds = function() {

  let n = window.prompt("Enter a number: ")
  let sum = 0

  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0)
      sum += i
  }
  return sum
}

console.log(sum_odds())








