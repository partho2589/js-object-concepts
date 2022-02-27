
// 1. using object literal
const student = { name: 'Rakib', age: 15}
// 2. constructor
const person = new Object()
// console.log(person)

// 3. 
// const human = Object.create(null)
const human = Object.create(student)
// console.log(human)
// console.log(human.age)

// 4. class
class People {
    constructor( name, age){
        this.name = name;
        this.age = age
    }
}
const popl = new People('Rakib', 15);
// console.log(popl)

// function 
function mans (name, age){
    this.name =name;
    this.age = age;
}
const names = new mans ( 'rana', 30)
console.log(names)