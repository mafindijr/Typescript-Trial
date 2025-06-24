const menu = [
    {name: "Margheruta", price: 8},
    {name: "Pepperoni", price: 10 },
    {name: "Hawaiian", price: 10 },
    {name: "Veggie", price: 9 }
];


const cashInRegister = 100;
const orderQueue = [];

function addPizza (pizzaObj) {

    menu.push(pizzaObj);
}

function placeOrder (pizzaName) {

    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);

    cashInRegister += selectedPizza.price;
    const newOder = { pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOder);

    return newOder;
}

function completeOrder() 