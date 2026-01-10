//if else statement
let alive = true
if (alive == true) {
    console.log('The rabbit is alive')
    document.write('The Rabbit is alive')
} else {
    console.log('The Rabbit is no more')
    document.write('The Rabbit is no more')
}

//if else if statemment
let score = 90

if (score >= 100) {
    console.log("A+")
} else if (score >= 90 && score <= 99) {
    console.log('B')
} else if (score >= 80 && score <= 89) {
    console.log("C")
} else if (score >= 70 && score <= 79) {
    console.log("D")
} else {
    console.log('Fail')
}

// Switch Statement
let a = 30
let b = 50

switch (a + b) {
    case 40:
        console.log(40)
        break
    case 80:
        console.log(80)
        break
    case 90:
        console.log(90)
        break

    default:
        console.log('No Answer detected')
}

// For Loop
/*let number = 0
for (let i = 0; i < 1000; i++) {
    number = number + 1
    console.log(number)
}*/

// While Loop
/*let number=0

while (number < 1000) {
    number = number + 1
    console.log(number)
}

// Calling a Function
function hello(){
    console.log('helloworld')
    document.write("<h1>helloworld</h1>")
}

hello()
hello()*/

// Function Parameter
function helloStudents(name,age,gen){
    console.log('Hello ' + name)
    console.log('I am '+ age)

    console.log('I am in class'+ gen)

}

helloStudents('Abu Block',40,6)
helloStudents('Kojo',20,4)
helloStudents('Emma',15,2)

// Function Return Statement
function addTwoNumbers(num1,num2){
    let answer = num1 - num2
    return answer
}

console.log(addTwoNumbers(9,3))

// Pre built Functions 
// Alart box 
//alert('are you sure?')

// Prompt Box 
//let age = prompt ('How old are you?')

//console.log(age)


// confirm box
//let close= confirm('close this page')

//console.log(close)

// Arrow Functions 
const arrowFunc=(age)=>{
    console.log('Arrow function age' + age)
}

arrowFunc(70)


//Objects
let person = {
    name: "John",
    age: 31,
    favColor: "green",
    height: 183
};

console.log(person)

console.log(person.favColor)
console.log(person['name'])

//classes
//Creating a class
/*class ProfileTemplate{
    constructor(name,email,password,address,age){
        this.name= name
        this.email= email
        this.password= password
        this.address= address
        this.age= age
    }
}*/

//instantiating a class
/*class ProfileTemplate{
    constructor(name,email,password,address,age){
        this.name= name
        this.email= email
        this.password= password
        this.address= address
        this.age= age
    }
}

const user1 = new ProfileTemplate('Afua',"anumemma24@gmail.com",'excel45','Accr, linstr 33',67)

console.log(user1)

const user2 = new ProfileTemplate('Abu',"anumemma67@gmail.com",'excellence51','Accra, linestr 12',60)

console.log(user2)*/

//Class Methods
class ProfileTemplate{
    constructor(name,email,password,address,age){
        this.name= name
        this.email= email
        this.password= password
        this.address= address
        this.age= age
    }

    getDateAndAddress(num1){
        return this.address + ""+ this.age+num1
    }
}

const user1 = new ProfileTemplate('Afua',"anumemma24@gmail.com",'excel45','Accr, linstr 33',67)

console.log(user1.getDateAndAddress(5))

const user2 = new ProfileTemplate('Abu',"anumemma67@gmail.com",'excellence51','Accra, linestr 12',60)

console.log(user2)

// Class Inheritance
class Car{
    constructor(wheels,stear,seats,engine){
        this.wheels=wheels
        this.stear=stear
        this.seats=seats
        this.engine=engine
    }
}

class PickUp extends Car{
    features(){
        return this.wheels + ""+ this.stear+ ""+ this.seats+ ""+this.engine
    }
}


const hilux = new PickUp(4,1,5,1)

console.log(hilux.features())


//Document Object Model (DOM)
