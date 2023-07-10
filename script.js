'use strict';

// //Default Parameters

// const bookings = []
// const createBooking = function(flightNum, numPassangers = 1, price = 199 * numPassangers){
//     // ES5
//     // numPassangers = numPassangers || 1
//     // price = price || 199
//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }
// createBooking("LH123")
// createBooking("LH123", 2, 800)
// createBooking("LH123", 2)
// createBooking("LH123", 5)
// createBooking("LH123", undefined ,1000)



// //How Passing Arguments Work

// const flight = "LH234"
// const Akpofure = {
//     name: "Okegbe Akpofure",
//     passport: 2348147567515
// }
// const checkIn = function(flightNum, passenger){
//   flightNum = "LH999"
//   passenger.name = "Mr. " + passenger.name
//   if(passenger.passport === 2348147567515){
//     alert("checked in")
//   }else{
//     alert("Wrong passport")
//   }
// }
// checkIn(flight, Akpofure)
// console.log(flight)
// console.log(Akpofure)
// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() + 1000000000)
// }
// newPassport(Akpofure)
// checkIn(flight, Akpofure)



// //Functions Accepting CallBack Functions

// const oneWord = function(str){
//     return str.replace(/ /g, "").toLowerCase
// }
// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(" ")
//     return [first.toUpperCase(), ...others].join(" ")
// }
// const trasnformer = function(str, fn,){
//     console.log(`Original string: ${str}`)
//     console.log(`Transformed string: ${fn(str)}`)
//     console.log(`Transformed by: ${fn.name}`)
// }
// trasnformer("JavaSCript is the best!", upperFirstWord)
// trasnformer("JavaSCript is the best!", oneWord)
// const high5 = function(){
//     console.log("✋")
// }
// // document.body.addEventListener("click", high5)
// const array = ["Okegbe", "Akpofure", "Adam"]
// array.forEach(high5);



// // Functions returning functions

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }
// const greeeterHey = greet("Hey")
// greeeterHey("Akpofure")
// greeeterHey("Brother")
// greet("Hello")("Akpofure")
// const greeter = greeting => name => console.log(`${greeting} ${name}`)

// const greeeterHello = greet("Helllo")
// greeeterHey("Akpofure")



// // The Call and Apply Methods

// const lufthansa = {
//     airline: "Lufthansa",
//     iataCode: "LH",
//     bookings: [],
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}}`)
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }   
// }
// lufthansa.book(239, "Okegbe AKpofure")
// lufthansa.book(256, "Onajite blabla")
// console.log(lufthansa)
// const euroWings = {
//     airline: "Eurowings",
//     iataCode: "EW",
//     bookings: []
// }
// const book = lufthansa.book
// // book(23, "Emeka Ofor")
// //Call Method
// book.call(euroWings, 23, "Emeka Ofor")
// console.log(euroWings)
// book.call(lufthansa, 250, "Jubril Bucknor")
// console.log(lufthansa)
// const swiss = {
//     airline: "Swift Air Lines",
//     iataCode: "LX",
//     bookings: []
// }
// book.call(swiss, 583, "Abuba Sahabi")
// console.log(swiss)
// //Apply Method
// const flightData = [563, "George Cooper"]
// book.apply(swiss, flightData)
// console.log(swiss)
// book.call(swiss, ...flightData)



// //The Bind Nethod

// const bookEW = book.bind(euroWings)
// const bookLH = book.bind(lufthansa)
// const bookLX = book.bind(swiss)
// bookEW(23, "John Doe")
// const bookEW23 = book.bind(euroWings, 23)
// bookEW23("Emmanuel Okegbe")
// bookEW23("Mara Clara")
// //WIth Event Listeners
// lufthansa.planes = 300
// lufthansa.buyPlane = function(){
//     console.log(this)
//     this.planes++
//     console.log(this.planes)
// }
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa))
// //Partial application 
// // const addTax = (rate, value) => value + value * rate
// // console.log(addTax(0.1,200))
// // const addVat = addTax.bind(null, 0.23)
// // console.log(addVat(100))
// const addTaxRate = function(rate){
//     return function(value){
//         return value + value * rate
//     }
// }
// const addVat2 = addTaxRate(0.23)
// console.log(addVat2(100))



// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){ 
//         const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\n(Wrute option number)`
//         )
//     )
//     console.log(answer)
//     typeof answer === 'number' && 
//     answer < this.answers.length && 
//     this.answers[answer]++
//     this.displayResults()
//     this.displayResults("string")
//     },
//     displayResults(type = "array"){
//         if(type === "array"){
//             console.log(this.answers)
//         }else if (type === "string"){
//             console.log(`Poll results are ${this.answers.join(", ")}`)
//         }
//     }

// }
// document
// .querySelector(".poll")
// .addEventListener("click", poll.registerNewAnswer.bind(poll))
// // poll.registerNewNumber()

// poll.displayResults.call({answers: [5,2,3]}, "string")
// poll.displayResults.call({answers: [1,5,3,9,6]}, "string")
// poll.displayResults.call({answers: [5,2,3]}, "string")


// const runOnce = function(){
//     console.log("This will never run again")
// }



// //Immediately Invoked Function
// (function (){
//     console.log('This will neber happen again')
//     const isPrivate = 23
// })()
// // (() => console.log('This will ALSO never run again'))()
// {
//     const isPrivate = 23
//     var notPrivate = 46
// }

// console.log(notPrivate)



// //Closures
// const secureBooking = function(){
//     let passengerCount = 0

//     return function(){
//         passengerCount++
//         console.log(`${passengerCount} passangers`)
//     }
// }
// const booker = secureBooking()
// booker()
// booker()
// booker()
// console.dir(booker)