let productInfo: [title: string, price: number, quantity: number];

function updateStock(inventory: { [key: string]: number }, productInfo: [string, number, number]): { [key: string]: number } {
  const [title, , quantity] = productInfo;

  if (inventory[title]) {
    inventory[title] += quantity; 
  } else {
    inventory[title] = quantity; 
  }

  return inventory;
}

let inventory = {
  "Laptop": 10,
  "Phone": 5
};


productInfo = ["Laptop", 1000, 3];
updateStock(inventory, productInfo);

console.log(inventory); 

productInfo = ["Tablet", 500, 7];
updateStock(inventory, productInfo);

console.log(inventory); 
