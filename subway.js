let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';
console.log(selectedColours);

function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');

function square(number) {
    return number * number;
}
let number = square(2);
console.log(number);

//let count = 7 + 3;
//console.log(count);

let myAge = 7;
let humanDogRatio = 10;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

let myCount = 50;
myCount = myCount - 25
myCount = myCount + 45;
console.log(myCount);
function myLogger() {
    console.log(42)
}
myLogger()

let lapCompleted = 0
function incrementLap() {
    lapCompleted = lapCompleted + 1
}
incrementLap()
incrementLap()
incrementLap()
console.log(lapCompleted)

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")


let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
}

//let messageUser = "You have three new notifications, Per!"
//console.log(messageUser)

//let myName = "Zaccheaus Joy Tayo"



let firstName = "Tayo";
let lastName = "Zaccheaus"
let fullName = firstName + " " + lastName
console.log(fullName)

let myName = "Linda"
let greeting = "Hi there"
function greetLinda() {
    console.log(greeting + ", " + myName + " !")
}
greetLinda()

let myPoint = 3
function add3point() {
    myPoint += 3
}

function remove1Point() {
    myPoint -= 1
}
add3point()
add3point()
add3point()
remove1Point()
console.log(myPoint)

console.log("2" + 2)
console.log(11 + 7)
console.log(6 + "5")
console.log("My Point: " + 5 + 9)
console.log("11" + "14")
