let button = document.getElementById("btn")

// button.addEventListener("dblclick", ()=>{
//     // alert("I was clecked.")
//     document.querySelector(".box").innerHTML = "<b>Yayy you are clicked</b> Enjoy your click"
    
// })

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you are clicked</b> Enjoy your click"
    
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't click right please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e)
    console.log(e.key, e.keyCode)
})
