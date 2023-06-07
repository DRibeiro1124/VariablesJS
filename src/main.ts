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
