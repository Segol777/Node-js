function makeTriple<T>(a: T, b: T, c: T): T[] {
 return [a, b, c]
}

console.log(makeTriple(1,2,3));
console.log(makeTriple('str','str1','str2'));
console.log(makeTriple(true, false, true));
