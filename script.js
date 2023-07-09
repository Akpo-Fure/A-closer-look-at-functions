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


//How Passing Arguments Work

const flight = "LH234"
const Akpofure = {
    name: "Okegbe Akpofure",
    passport: 2348147567515

}
const checkIn = function(flightNum, passenger){
  flightNum = "LH999"
  passenger.name = "Mr. " + passenger.name

  if(passenger.passport === 2348147567515){
    alert("checked in")
  }else{
    alert("Wrong passport")
  }
}
checkIn(flight, Akpofure)
console.log(flight)
console.log(Akpofure)

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() + 1000000000)
}
newPassport(Akpofure)
checkIn(flight, Akpofure)