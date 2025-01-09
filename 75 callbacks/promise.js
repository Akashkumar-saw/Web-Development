console.log("Promise")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("no random number was supporting you")
    }
    else {

        setTimeout(() => {
            console.log("Yes i am done")
            resolve("Akash")
        }, 3000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random()
    if(a<0.5){
        reject("no random number was supporting you")
    }
    else{

        setTimeout(() => {
            console.log("Yes i am done 2")
            resolve("Akku")
        }, 1000);
    }
})

// let p3 = Promise.all([prom1,prom2])
// let p3 = Promise.allSettled([prom1,prom2])
// let p3 = Promise.race([prom1,prom2])
// let p3 = Promise.any([prom1,prom2])
// let p3 = Promise.resolve([prom1,prom2])
let p3 = Promise.reject([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
