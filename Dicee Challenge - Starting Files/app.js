let number = Math.floor(Math.random() * 6 + 1);
console.log(number);


let text = document.querySelector("h1")
let number2 = Math.floor(Math.random() * 6 + 1);
console.log(number2);
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
img1.src = `images/dice${number}.png`
img2.src = `images/dice${number2}.png`
if(number > number2){
text.textContent = "First player win"
}
else if(number2 > number){
    text.textContent = "Second player win"
}
else{
    text.textContent = "Draw"
}
let button = document.querySelector("button")
button.addEventListener("click" , function(){
    location.reload()
})