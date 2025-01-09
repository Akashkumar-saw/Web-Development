let a = prompt("Enter 1st number")

let b = prompt("Enter 2nd number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum=parseInt(a)+parseInt(b)


// try {
//     console.log("The sum is ",sum*x)
// } catch (error) {
//     console.log("Error aa gaya bhai")
// }


function main(){
    let x= 1;
    try {
        console.log("The sum is ",sum*x)
        return true
    } 
    catch (error) {
        console.log("Error aa gaya bhai")
        return false
    }
    finally{
        console.log("file are being close and db connection is being closed")
    }
}
let c = main()