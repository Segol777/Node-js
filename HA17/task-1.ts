function calculateTotal(price: number, quantity: number, discount: number = 0):number {
  return price * quantity - discount
}

console.log(calculateTotal(55, 2));
console.log(calculateTotal(100, 3, 50));
