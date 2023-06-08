import './style.css'

// Practice Creating Variables
const numberOfCupsOfCoffee = 1
const fullName = 'Dino Ribeiro'
console.log(
  `Hello! My name is ${fullName} and currently I am just drinking ${numberOfCupsOfCoffee} cup of coffee every morning.`
)

//Create an object variable
const aboutMe = {
  fullName: 'Dino Ribeiro',
  luckyNumber: 11,
  favoriteMovies: [
    'Saving Private Ryan',
    'Apollo 13',
    'Anchorman, the legend of Ron Burgandy',
  ],
}

//Practice getting input from user
const userName = window.prompt('Please enter your name:')
console.log(`Hello, ${userName}!`)

//Converting string input into numbers
const firstOperand = Number(window.prompt('Enter the first number:'))
const secondOperand = Number(window.prompt('Enter the second number'))

//Doing math
const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const remainder = firstOperand % secondOperand

console.log(`The sum of ${firstOperand} and ${secondOperand} is ${sum}`)

//Using arrays
const numbers = [6, 7, 10, 11, 24, 7]

let smallest = numbers[0]
let largest = numbers[0]
let arraySum = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < smallest) {
    smallest = numbers[i]
  }
  if (numbers[i] > largest) {
    largest = numbers[i]
  }
  arraySum += numbers[i]
}

const average = arraySum / numbers.length

// Create an object called stats
const stats = {
  smallest: smallest,
  largest: largest,
  sum: arraySum,
  average: average,
}

console.log(`Smallest number in the array: ${stats.smallest}`)
console.log(`Largest number in the array: ${stats.largest}`)
console.log(`Sum of all numbers in the array: ${stats.sum}`)
console.log(`Average of all numbers in the array: ${stats.average}`)
