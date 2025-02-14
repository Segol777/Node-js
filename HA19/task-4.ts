function getLastElement<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1]
}

const numbers = [1, 2, 3, 4, 5]
const lastNumber = getLastElement(numbers)
console.log(lastNumber)

const strings = ["apple", "banana", "cherry"]
const lastString = getLastElement(strings)
console.log(lastString)

const mixed = [1, "two", true]
const lastMixed = getLastElement(mixed)
console.log(lastMixed)
