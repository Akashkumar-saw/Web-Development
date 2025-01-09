// let obj={
//     a:1,
//     b:"Akash"
// }
// console.log(obj)


// let animal={
//     eats:true
// }
// let rabbit={
//     jumps:true
// }

// rabbit.__proto__ = animal; //Set rabbiy.[[prototype]] = animal


//constructor
class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    junmps(){
        console.log("Kood raha hoon")
    }
}

// class inheritanse
class lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created and he is a lion...")
    }

    //method overriding
    eats(){
        console.log("Kha raha hoon roar")
    }
}
let a = new Animal("Bunny")
console.log(a)

let l = new lion("Shera")
console.log(l)

