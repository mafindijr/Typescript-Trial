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

let person2: Person = {

    name: "jill",
    age: 66,
    isStudent: false,
    address: {
        street: "23 lamurde",
        city: "jalingo",
        country: "Nigeria"
    }
}


// using the ? to make your type optional will reduce your type safety for example

// function displayInfor(person) {
//     console.log(`${person.name} lives at ${person.address.street}`);
// }
//this will not work but this will

function displayInfor(person: Person ) {
    console.log(`${person.name} lives at ${person.address?.street}`);
}

console.log(displayInfor(person1));

// Types in array

//primitive type
let ages: number[] = [100, 104, 108];

// using the custom type

let People: Person[] = [person1, person2];

// you also used this Array<Person> istead of Person[] it works too for array datatypes

let myName1: "Abdul" = "Abdul";

const myName2: "Abdul" = "Abdulsss";


// Union 

type User = {
    userName: string;
    role: "guest" | "member" | "admin";
}

type UserRole1 = "guest" | "member" | "admin";

let userRole: UserRole1 = "member";

// Function return types

type UserRole = "guest" | "admin" | "member";

type User2 = {
    userName: string;
    role: UserRole;
}

const users: User2[] = [

    {userName: "abdulrazak mafindi", role: "admin"},
    {userName: "dhas senior", role: "guest"},
    {userName: "mafindi jr", role: "member"}


];