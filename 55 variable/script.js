// console.log("hey i am akash")
// var a=5
// var b=9
// console.log(a+b)


// let Tcs = {
//      "name":"Akash", 
//      "age":22, 
//      "Work area":"IT sector in tcs"
// }

// for (const key in Tcs) {
//     const element = Tcs[key]
//     console.log(key,element)
    
// }

// for (const char of "Akash") {
//     console.log(char)
    
// }

// console.log(Tcs)

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}