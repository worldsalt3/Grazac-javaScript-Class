// Variables and Operators
// let a  = 64;
// let b =  64;
// let c = 2;


// const pi = 3.14;


// var additionOfab = a + b;
// let subtractionOfab = a - b;
// let multiplicationofab = a * b;
// let divisionOfab = a / b;
// let exponentialOfbc = b ** c;
// let ReminderOfbc = b % c;
// let equaloperator = a === b;

// let incrementOfa = a++;
// let incrementOfA = ++a;
// let postDecrementOfa = a--;
// let preDecrementOfa = --a;
// let logicalNot =  !false;
// let notEqualTo = a != b;
// let greaterThanOperator = c >= a;
// a += 10;
// b -= 14;
// b *= 2;
// b /= 2;




// console.log(
//   'additionOfab: ' + additionOfab,
//   'subtractionOfab: ' + subtractionOfab,
//   'multiplicationofab: ' + multiplicationofab,
//   'divisionOfab: ' + divisionOfab,
//   'exponentialOfbc: ' + exponentialOfbc,
//   'ReminderOfbc: ' + ReminderOfbc,
//   'equaloperator: ' + equaloperator,
//   'incrementOfa: ' + incrementOfa,
//   'postDecrementOfa' + postDecrementOfa,
//   'preDecrementOfa: ' + preDecrementOfa,
//   'logicalNot: ' + logicalNot,
//   'notEqualTo: ' + notEqualTo,
//   'greaterThanOperator: ' + greaterThanOperator,
//   'Value of a : ' + a,
//   'Value of b : ' + b
// )



// Data types
// let num = 12;
// let word = 'Hello World';
// let occupation = 'Software Dev'
// const obj = {
//   firstName: 'Kenneth', 
//   lastName: 'Ngozi',
//   age: 80,
//   child: {
//     childName: 'Chibuzo',
//     age: 5
//   },
//   isMarried: false,
//   hobby: ['Foodie', occupation, 'Travelling', 'sleeping']

// };

// let bool = true;
// let cost = null
// let arr = [12, 'something', [12, 34], {name: 'chika'}, 'akin', 26, 45]

// console.log(arr.length)

// console.log(arr[2],'last element in the array: ' + arr[arr.length - 1])
// console.log(obj.firstName, obj.hobby, obj.isMarried, obj['age'], obj['child']);

// console.log(num);
// console.log(word)----;
// console.log(bool);
// console.log(cost)
// console.log(arr)


// Function
// const a  = 10
// const b = 4

// const additionOfab = a + b


// let c  = 3
// let d = 8 

// c = 7
// d=10
// let additionOfcd = c + d
// console.log(additionOfcd)


// console.log(additionOfab)

// function addition(arg1, arg2) {
//   return arg1 - arg2;
// };


// let result
// function subtraction(num1, num2) {
//   result = num1 - num2
//   return result
// }


// console.log(addition(a, b))

// console.log(subtraction(1, 2))
// console.log(result)


// Conditional statement
// let benchMark = 18

// let Kenneth = 16


// if & else conditional statement

// if ( Kenneth > benchMark || Kenneth <= benchMark) {
//   console.log('You\'re eligible to be a drunkard')
// } else {
//   console.log('grow faster')
// }



// AND operator
// console.log(false && true)
// console.log(false && false)
// console.log(true && true)
// console.log(true && false)




// OR operator
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


//Switch, case Statement
// switch (Kenneth) {
//   default:
//      console.log('grow first')
//      break
//   case 40:
//     console.log("You're eligible to be a drunkard")
//     break
//   case 10:
//     console.log('Drink responsively')
//     break
//   case 20:
//     console.log('thhifdabkjfr')
//     break
// }



// var obj = {
//     firstName: 'Kenneth',
//     lastName: 'Esscenss',
//     age: 100,
//     gender: 'transgender',
//     height: 5.9
// }
// Loop

// let arr = ['car key', 'house key', 2000, 'Laptop', 'condom', 'wallet', 15000, 1000]

// let str_1 = "frontend"
// let str_2 = 'developer'

// let stringLiteral = `I work as a ${str_1} ${str_2}, and I am earning ${obj.age * 2} annually`
// let string  = 'I work as a ' + str_1 + ' ' + str_2 + 'and I am earning ' + obj.age * 2 + ' annually'
// console.log(stringLiteral)
// console.log(string)



/***************Concatenation********************** */
// let num_1 = 2
// let num_2 = 10
// let num_3 = '14'

// let addition
// let concatination


// addition = num_1 + num_3
// console.log( typeof addition)




// for Loop
// for (let i = 0; i < arr.length; i = i + 2) {
//   console.log(arr[i])
// }


// while Loop
// let i = 0

// while(i < arr.length) {
//   console.log(arr[i])
//   i += 3
// }

// for in Loop
// for (let items in str) {
//     console.log(items)
// }

/* *****************for of Loop**************** */
// for(let item of str) {
//     console.log(item)
// } 




// {
//  const isItTrue = true
// }



// function example() {
//    var firstName = 'Kenneth'
// }

// console.log(isItTrue)


// Block Scope
// {
//     const car  = 10
// }

// console.log(car)


// function scope
// function functionScope() {
//     var examplee = 10
// }

// console.log(examplee)


// HOF
// let a = 12
// let b = 10
// let c
  
  
  // multiply(4)



 
  
  // let multiply = a => a + b
  
  
  // console.log(multiply(a))
  
//   console.log(higherOrderFunction())

// age = 100
// console.log(age)



// let lastName, firstName, gender
// const pi = 3.146

// // console.log(lastName)



// // HOF
// function higherOrderFunction() {
//   // HOF
//    return function multiplyBy2() {
//      return function evaluate(params) {
//         return params * 2
//      }
//    }
// }

// let firstHOF = higherOrderFunction()

// let secondHOF = firstHOF()




// console.log(secondHOF(4))




// let callBack = higherOrderFunction()

// console.log(callBack(2, 4))


// IIFE(Immediate invoked function expression)
// console.log((function evaluate(params) {
//     return params * 2
//  })(4))


// callbacks

// function evaluation(a, b, callBackFunction) {
//   return callBackFunction(a, b)
// }

// const subtraction = function(a, b) {
//   return a - b
// }

// var multiply = function(x, y) {
//    return x * y
// }
// console.log(evaluation(5, 6, addition))
// console.log(evaluation(7, 10, multiply))
// console.log(evaluation(100, 50,  subtraction))
  


// function addition(param1, param2) {
//   return param1 + param2
// }


// closure

// let counter = (function () {
//   let count = 0
//   return function countit () {
//     return count += 1
//   }
// })()

// let example = (function () {
//   let dummy = 0
//   return function evaluate() {
//     return dummy += 2
//   }
// })()

// console.log(example())
// console.log(example())





// let caoch = 'Teh hang'

// caoch = 'zidane'
 
// console.log(caoch)
// function nameOfCoach() {
//   let caoch = 'coode'
// }

// console.log(count)

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())


// classes

// let obj = {
//   firstName: 'Kenneth',
//   lastName: 'Hassan',
//   age: 24,
// }



// class UserInfo {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName, 
//     this.lastName = lastName,
//     this.age = age
//   }

//   fullName (occupation) {
//     return `My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old, I work as a ${occupation} `
//   }
// }


// class UserCredentials {
//   constructor(username, password, tel) {
//       this.userName = username,
//       this.password = password,
//       this.telephone = tel
//   }
// }

// let user1 = new UserInfo('Johnson', 'Oluyemi', 94)
// let user2 = new UserInfo('Iyo', 'Adedolapo', 20 )


// let credential1 = new UserCredentials('worldsalt3', 1234, '+2347474432949')

// console.log(user1)
// console.log(user2)

// console.log( 
//   user1.fullName('Frontend Developer')
//   )

// console.log( user2.fullName('Backend Developer'))

// Advance Array and Object / Array methods and Object methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,  9,  10]

// console.log(arr[0][1][0])

// arr.push(11)
// arr.unshift(0)
// let shiftValue = arr.shift()
// let ourValue = arr.pop()
// console.log(arr)
// console.log(shiftValue)
// console.log(ourValue)

// array map Method
// let multipliedArr = arr.map((item) => {
//   return item * 2
// })


// array filter method
// let evenNumbers = arr.filter(function (item) {
//     return item % 2 === 0
// })

// console.log(evenNumbers)

// console.log(arr)
// console.log(multipliedArr)

// let obj = {
//   firstName: 'Lola',
//   lastName: 'Poland',
//   bag: {
//     housekey: 7,
//     carkeys: {
//       honda: 2,
//       benz: 4, 
//       lexus: 6
//     }
//   },
//   age: 98,
//   fullName: function (occupation) {
//     return `My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old, I work as a ${occupation} `
//   },
// }


// console.log(obj.bag.carkeys.benz)
// console.log(obj.fullName('Product Designer'))



// DOM
// console.log(document.getElementsByTagName('button'))
// console.log(document.getElementById('btn-1'))
// console.log(document.getElementsByClassName('paragraph'))
// console.log(document.querySelector('.paragraph'))
// console.log(document.querySelectorAll('p'))


// let paragraph = document.getElementById('para1-container')

// paragraph.innerHTML = "<img src='' alt='testing' />"

// paragraph.innerHTML = 'It has been changed'

// DOM styling properties
// let btn = document.querySelector('#btn')
// btn.style.backgroundColor = 'red'
// btn.style.color = '#fff'
// btn.style.border = 'none'
// btn.classList.remove('btn')
// btn.classList.add('btn')

// let divContainer = document.querySelector('#para1-container')





// function alertFunction() {
//   alert('Welcome bro!')
// }

// function createH1Element() {
// let paragraph = document.createElement('h1')
// paragraph.innerText = 'this is another element'

// divContainer.appendChild(paragraph)
// }

// let btn1 = document.getElementById('btn-1')

// btn1.addEventListener('click', createH1Element)





// console.log(divContainer.parentElement)

// Asynchronous JavaScript
// setTimeout(() => {
//   console.log(`Eh!, I've been fired`)
//   setTimeout(() => {
//     console.log(`this is our second timeout`)
//   }, 5000)
// }, 3000)


let paragraph = document.getElementById('para')
let button = document.querySelector('#btn')



let is_promise = true

/**********JS Promise*************/ 

// let myPromise = new Promise((resolve, reject) => {
//   if(is_promise === true) {
//     resolve('our content will change') // if it is successfull 
//   } else {
//     reject((error) => error = 'this is our error message')//if not successfull reject will run
//   }
// })


// myPromise.then((result) => {
//   paragraph.innerText = result
// } )

// myPromise.then(function(result) {
//   button.innerText = result
// })

// myPromise.catch((error) => alert(error))



/********Tenary Operator**********/ 
// is_promise ? console.log(true) : console.log(false)



/*************Async / Await *************/ 
// async function myDisplay() {

//   console.log('kjhewrbklrghjer')

//   setTimeout(() => {console.log('I love you')}, 5000)

//   console.log('I am running')
// }

// myDisplay()

// let myPromise = async () => {
// }

// Revision Function
// function firstFunction () {
  
// }



// A function that checks if the user browser supports GPS, also get the current location i.e Latitude and longitude and fetch the weather api with gotten lat & lon
let getUserLocation = () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherAPI)

  }else {
    alert('Geolocation is not supported by this browser.')
  }
}

let apiKey = '3b588a70808f0b4dfad48e1aa66012b3'
let baseURL = 'https://api.openweathermap.org/data/2.5/weather'


let getWeatherAPI = (position) => {
  fetch(
    `${baseURL}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`
  )
  .then((res) =>  res.json())
  .then((data) => {
    paragraph.innerText = JSON.stringify(data)
  })

}

getUserLocation()






























