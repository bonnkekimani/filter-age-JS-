const people = [
    {
        name:'Flo',
        age: 26
    },
    {
        name:'Ben',
        age: 18
    },
    {
        name:'Ivan',
        age: 15
    },
    {
        name:'liz',
        age: 22
    }
];

const adults = people.filter(person => person.age >= 18);

console.log(adults);