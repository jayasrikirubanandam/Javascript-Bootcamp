// learning javascript

let amount = 12
amount=13
console.log(amount) 
//var is old way of declaring variables
//let is new way of declaring variables
//const is used for constant variables  which cannot be changed later
//const amount = 12
// amount = 13
console.log(amount) //error
//javascript is dynamically typed language - no need to specify type of variable
//let a = prompt("Enter a number") // to take input from user
//typeof a is string because prompt returns string
//console.log(a +2) //output will be string
//console.log(Number(a)+2)

let firstName = 'jayasri'
let lastName = 'Raja'
let city ='chennai'

console.log(firstName + ' ' + lastName + ' ' + 'lives in ' + city)
console.log(`${firstName} ${lastName} lives in ${city}`) //template literals


let itemCount = 5
let total= '$95'

console.log(`"You have ${itemCount} items in your cart.
    Your bill amount is ${total}"`);

    //Arrays
    let fruits = ['apple', 'mango', 'banana']
    console.log(fruits)
    fruits.push('orange')
    fruits.push('grapes')
    console.log(fruits)
    fruits.pop()
    console.log(fruits)
    fruits.shift()   // the first element is removed
    console.log(fruits)
    fruits.unshift('kiwi') // the element is added to the first position
    console.log(fruits)
    console.log(fruits.length)
    console.log(fruits[0])
    //slice
    //1st parameter - starting index
    //2nd parameter - ending index -exclusive
    fruits.slice(1,3)
    console.log(fruits)

   
    console.log( fruits.slice(0,4))    
    console.log('-------------------')
    //splice
    //1st parameter - starting index
    //2nd parameter - number of elements to remove
    //3rd parameter - elements to add
  
    fruits.splice(0,1)
    console.log(fruits)
    fruits.splice(1,1,'papaya') //replace the element at index 1 with papaya
    console.log(fruits)
    fruits.splice(1,0,'apple') //insert papaya at index 1       
    console.log(fruits)

    //join 
    //joins the elements of the array into a string
    let str = fruits.join()
    console.log(str)

    //split
    let sr = str.split(',')
    console.log(sr)
