// learnig basics

let myName: string = 'Bob';

let numberOfWheels: number = 4;
let isStudent: boolean = true;

//custom types

type Address = {
    street: string;
    city: string;
    country: string;
}

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Address;
    // address: {
    //     street: string;
    //     city: string;
    //     country: string;
    // }
}

//custom type ready to be use/ Nested Object Types

let person1: Person = {

    name: "joe",
    age: 42,
    isStudent: true,
}

let person2: Person , Address = {

    name: "jill",
    age: 66,
    isStudent: false,
    address: {
        street: "23 lamurde",
        city: "jalingo",
        country: "Nigeria"
    }
}


console.log();


