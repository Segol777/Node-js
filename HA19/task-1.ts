const nums: number[] = [3, 6, 10, 2, 1, 8, 9, 4]

const sumEvenNumbers = (nums: number[]): number => {
  let sum = 0
  
  nums.forEach(num => {
    if (num % 2 === 0) {
      sum += num 
    }
  })
  
  return sum;
}

console.log(sumEvenNumbers(nums))
