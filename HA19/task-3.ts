type CompareStrings = {
  (str1: string, str2: string): boolean
}

const compareStrings: CompareStrings = (str1: string, str2: string): boolean => {
  return str1  === str2
}

console.log(compareStrings('yes', 'yes'));
console.log(compareStrings('yes', 'no'));
