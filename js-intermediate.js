// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//  const makeFib=(number)
//         let fibarray = [1, 1, 2]
//         if(number === 0) {
//             return 0
//         } else if(number === 1) {
//             return 1
//         } else {
//         return makeFib(number-1) + makeFib(number-2)  
//     }
//      const Fib = (length = 9) => {
//     let fibarray = [1,1,2]
//     for(let i=2; i <= length; i++){
//         array.push(makeFib(i))
//     }
//  return fibarray
//     }
//     fibNumbers = getFib(length=10)
   
//  console.log("This is the first 10 fib number", fibNumbers)


// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

     const onlyOdd = (array) => {
         return array.filter((value) =>{
        return typeof value === 'number' && value % 2 !=0
        });
  }
  console.log("fulArr1", onlyOdd(fullArr1))
  console.log("fulArr1", onlyOdd(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log('type:', bicycle.type);

// Log the bell:
 console.log('bell', bicycle.gear[2])

// Log the PSI:
    console.log('PSI', bicycle.wheels.specs[2])

// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// // Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// // Expected output: ["e", "c", "h", "o", "1", "9"]

    const reverser = (arr) => {
    return arr.reverse()
    }

console.log('reverser', reverser(originalArray1))
console.log('reverser', reverser(originalArray2))

// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// // Expected output: 3

const letterCounter = (phrase)=>{
         return phrase
             .toLowerCase()
             .split('')
             .filter((letter)=> letter === 'l')
           .length
 }
 
console.log(letterCounter (ourString))

// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

 var middleLetters1 = "hello"
 // Expected output: “l”
 var middleLetters2 = "rhinoceros"
 // Expected output: “oc”

const middleFinder = (word) => {
    const letters = word.split("")
if(letters.length % 2 ===0){
        let haveIndex1 = letters.length / 2 - 1
        let haveIndex2 = letters.length / 2
        return letters[haveIndex1] + letters[haveIndex2]
    } else {
let midNumIndex = letters.length / 2 + 0.5
    return letters[midNumIndex]
        }
    }
console.log('middleFinder', middleFinder(middleLetters1))
console.log('middleFinder', middleFinder(middleLetters2))

// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
    constructor(radius){
        this.radius = radius
    }
    area (){
        return 4 * Math.PI.toFixed(3)* (this.radius**2)
        }
    }

    const sphereOne = new Sphere(4)
    const sphereTwo = new Sphere(6)
    const sphereThree = new Sphere(99)
    
    console.log("the areas", sphereOne.area(), sphereTwo.area(), sphereThree.area())
    
// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}
const {specs} = myCar
const {doors, transmission} = myCar.specs

console.log ("specs", doors, transmission)

// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
