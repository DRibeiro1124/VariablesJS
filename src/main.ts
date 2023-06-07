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
