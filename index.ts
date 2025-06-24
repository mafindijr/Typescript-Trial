const menu = [
    {name: "Margheruta", price: 8},
    {name: "Pepperoni", price: 10 },
    {name: "Hawaiian", price: 10 },
    {name: "Veggie", price: 9 }
];


const cashInRegister = 100;
const nextOrderId = 1;
const orderQueue = [];

function addNewPizza (pizzaObj) {

    menu.push(pizzaObj);
}

function placeOrder (pizzaName) {

    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    cashInRegister += selectedPizza.price;
    const newOder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOder);

    return newOder;
}

function completeOrder(orderId) {

        const order = orderQueue.find(order => order.id === orderId);
        order.status = "completed";
        return order;

} 

addNewPizza({ name: "Chicken Bacon ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("order Queue", orderQueue);