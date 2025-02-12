type OrderStatus = "pending" | "shipped" | "delivered" 

interface Order {
  orderId: string;
  amount: number;
  status: OrderStatus;
}

let orders: Order[] = [
  { orderId: '001', amount: 100, status: 'pending' },
  { orderId: '002', amount: 200, status: 'shipped' },
  { orderId: '003', amount: 150, status: 'delivered' },
  { orderId: '004', amount: 120, status: 'pending' },
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus ): Order[] {
  return orders.filter(order => order.status === status)
}

const pendingOrders = filterOrdersByStatus(orders, 'pending');
const shippedOrders = filterOrdersByStatus(orders, 'shipped');
const deliveredOrders = filterOrdersByStatus(orders, 'delivered');

console.log(pendingOrders);
console.log(shippedOrders);
console.log(deliveredOrders);