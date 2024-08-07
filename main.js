const p1 = document.getElementById('p1');
const h2list = document.getElementsByClassName("subtitle");
const textInput= document.getElementById('username-input');

const element1 = document.querySelector("#p1");
const element2 = document.querySelectorAll(".subtitle");

console.log(p1);
console.log(h2list);
console.log(textInput);




textInput.addEventListener("input", (e) => {
    p1.textContent = e.target.value;
});