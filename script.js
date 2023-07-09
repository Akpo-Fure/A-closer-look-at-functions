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
//     name: "Eurowings",
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