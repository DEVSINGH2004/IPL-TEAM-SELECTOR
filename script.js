let teams = [{
    name: "CSK",
    color: "yellow",
},

{
    name: "RCB",
    color: "red",
},
{
    name: "MI",
    color: "blue",
},
{
    name: "KKR",
    color: "purple",
}
];

let winner = teams[0]
console.log(winner.name)
console.log(winner.color)

let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let winner = teams[Math.floor(Math.random()*teams.length)];
    document.querySelector(".box").style.backgroundColor = winner.color;
    document.querySelector(".box").innerHTML = `<h3>${winner.name}</h3>`;
    document.querySelector("#selected-team").textContent = `Selected team is ${winner.name}`;
    document.querySelector("#selected-team").style.display = "initial";
})
