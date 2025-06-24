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