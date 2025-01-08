//Array Destructuring
const numbers = [1,2,3,4,5];
const [x,y,z] = numbers;
console.log(x);

//Object Destructuring
const human = {
    name: 'Augustine',
    age: 23,
    address: 'Accra'
};

const {name,age,address} = human;
name?console.log(`Welcome to Admin Page ${name}`)
:console.log('Admin Access Denied');
// const {name,age,address} = human;
// name && age > 24 && address === 'Accra' ? console.log(`Welcome to Admin Page ${name}`) : console.log('Admin Access Denied');


//Nested Destructuring
const newUser={
    id: 1,
    info:{
        firstName: 'Augustine',
        aGe: 23,
        address: {
            city: 'Accra',
            country: 'Ghana'
        }
    }
}

const {info:{
    firstName,
    aGe,
    address:{
        city,
        country
    }
}} = newUser;

console.log(firstName);


//Default Values 
const [a=10, b=3] =[40,60];
console.log(a);
console.log(b);

let [c=10, d=4] = [undefined,70]
console.log(c);
console.log(d);



//Function Parameters 
function greet({nAme,agE}){
    console.log(`Hello ${nAme}, you are ${agE} years old`);
}
const user = {
    nAme: 'Augustine',
    agE : 23
}

greet(user);
