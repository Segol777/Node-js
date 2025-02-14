interface StringToBooleanFunction {
  (str: string): boolean;
}

const isEmptyString: StringToBooleanFunction = (str: string): boolean => {
  return str === ''
}

console.log(isEmptyString(""))
console.log(isEmptyString("Hello"))
