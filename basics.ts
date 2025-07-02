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

type UserRole = "guest" | "admin" | "member" | "contributor";

type User2 = {
    id: number
    userName: string;
    role: UserRole;
}

let nextUserId = 1;

const users: User2[] = [

    {id: nextUserId++, userName: "abdulrazak mafindi", role: "admin"},
    {id: nextUserId++, userName: "dhas senior", role: "contributor"},
    {id: nextUserId++, userName: "mafindi jr", role: "member"},
    {id: nextUserId++, userName: "mafindi jr", role: "guest"}


];


function fetchUserDetails (userName: string)/*not neccessary but neccessary to include the fuction type */: User2 {

    const user = users.find(user => user.userName === userName);
    if(!user) {
        throw new Error(`User with username ${userName} not found`);
    }

    return user;
}


// Type Any
// Note never use type any

let value: any = 1;


//utility Types and Partial

// type UpadtedUser = {

//     id?: number;
//     userName?: string;
//     role?: UserRole;
// }

//instead of the above code we can use Partial Type eg.

type UpadtedUser = Partial<User2>;
// this copy ther user2 type and make all the types optional

function updateUser(id: number, updates: UpadtedUser) {
    //find the user in the array by the id
    const foundUser = users.find(user => user.id === id);
    if(!foundUser) {
        console.error("User not found!");
        return
    }

    // Use object.assign to update the found user in place
    Object.assign(foundUser, updates);
}

// updateUser(1, { userName: "new_john_doe" });
// updateUser(4, { role: "contributor" });


// omit utility type

function addNewUser(newUser: Omit<User2, "id">): User2 {

    const user: User2 = {
        id: nextUserId++,
        ...newUser
    };
    users.push(user);

    return user;


}

//Example Usage

addNewUser({ userName: "John_doe", role: "member" });

console.log(users);