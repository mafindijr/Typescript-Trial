//custom types initialization

type Pizza = {
    // adding ids to menu array
    id: number;
    name: string;
    price: number;
}

type Order = {
        id: number;
        pizza: Pizza;
        status: "ordered" | "completed";
}

//type Identifier = string | number;

 let cashInRegister: number = 100;
 let nextOrderId: number = 1;
 let nextPizzaId: number = 1;
 const orderHistory: Order[] = [];

const menu: Pizza[] = [
     { id: nextPizzaId++, name: "Margheruta", price: 8},
     { id: nextPizzaId++, name: "Pepperoni", price: 10 },
     { id: nextPizzaId++, name: "Hawaiian", price: 10 },
     { id: nextPizzaId++, name: "Veggie", price: 9 }
];


function addNewPizza (pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza);

    return newPizza;
    
}

function placeOrder (pizzaName: string): Order | undefined {

    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if(!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return
    }
    cashInRegister += selectedPizza.price;
    const newOder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderHistory.push(newOder);

    return newOder;
}

function completeOrder(orderId: number): Order | undefined {

        const order = orderHistory.find(order => order.id === orderId);
        if(!order) {
            console.error(`ths ${order} is not available`);
            // throw new Error(`Order with ID ${orderId} not found`);

            return;
        }
        order.status = "completed";
        return order;

} 


function getPizzaDetails (identifier: string | number): Pizza | undefined {

    if(typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw TypeError("parameter 'identifier' must be ether a string or a number ");
    }

}

addNewPizza({ name: "Chicken Bacon ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder(1);

console.log("Menu", menu);
// console.log("Cash in register", cashInRegister);
// console.log("order Queue", orderHistory);