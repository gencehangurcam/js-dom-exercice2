let input = document.querySelectorAll("input")
console.log(input);

let input1 = input[0]

input1.addEventListener("mouseover", (e) => {
    input1.style.backgroundColor = "blue"
})

//exo2
let input2 = input[1]
input2.addEventListener("mouseover", (e) => {
    input2.style.backgroundColor = "blue"
})
input2.addEventListener("mouseout", (e) => {
    input2.style.backgroundColor = "transparent"
})

//exo3
let premierParagraphe = document.getElementsByClassName("premierParagraphe")[0];
let secondParagraphe = document.getElementsByClassName("secondParagraphe")[0];
let dernierParagraphe = document.getElementsByClassName("dernierParagraphe")[0];
let buttonExo = document.getElementsByClassName("buttonExo")[0];

buttonExo.addEventListener("click", () => {
    premierParagraphe.textContent = secondParagraphe.textContent
    dernierParagraphe.textContent = secondParagraphe.textContent
})
//exo4
let myInputExo4 = document.querySelectorAll("input")[2];
let recupButtonExo4 = document.getElementsByClassName("buttonExo")[1];
let nameExo4 = document.querySelector("#exo4");

recupButtonExo4.addEventListener("click", () => {
    nameExo4.innerText = myInputExo4.value;
});

//exo5
let myImage = document.getElementsByClassName("img-responsive")[0]
let btn3 = document.getElementsByClassName("btn")[2];
let exo5P = document.getElementsByTagName("p")[4].innerText

btn3.addEventListener