for (let i = 1; i <= 100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

let person = {
    username: "ABC",
    phonenumber: 39230293
}

localStorage.setItem("Address", JSON.stringify(person))
localStorage.setItem("Phone number", person.phonenumber)

let btn = document.getElementById("btn")


console.log(JSON.parse(localStorage.getItem("Address")));

let w;
let e;
let r;

// let q = prompt("Enter name:")
// if (q == w || q == e || q == r){
//     alert("Name already exists")
//     q = prompt("Enter name")
// } else {
//     console.log(q);
// }
// w = prompt("Enter name:")
// if (w == q || w == e || w == r){
//     alert("Name already exists")
//     w = prompt("Enter name")
// } else {
//     console.log(w);
// }
// e = prompt("Enter name:")
// if (e == q || e == w || e == r){
//     alert("Name already exists")
//     e = prompt("Enter name")
// } else {
//     console.log(e);
// }
// r = prompt("Enter name:")
// if (r == q || r == e || r == w){
//     alert("Name already exists")
//     r = prompt("Enter name")
// } else {
//     console.log(r);
// }

// let names = [q, w, e, r]
// console.log(names);

let count = 1

let box = document.getElementById("box")

btn.addEventListener("click", function(){
    let h3 = document.getElementById("text")

    count = count + 1

    h3.innerHTML = "Username: "+person.username+"<br>Phone number: "+person.phonenumber

    // console.log(names);

    if (count % 2 == 0){
        box.style.borderRadius = "50%"
    } else {
        box.style.borderRadius = "0%"
    }

    let m = document.getElementById("left")
    let r = document.getElementById("top")

    box.style.left = m.value+"%"
    box.style.top = r.value+"%"
})