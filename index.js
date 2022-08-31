const textAreaEl =document.getElementById("text-area");
const totalCounterEl = document.getElementById("total-counter");
const ramainingCounterEl = document.getElementById("remaining-counter");
const b =document.querySelector("b");
console.log(b);
textAreaEl.addEventListener("keyup",()=>{
    updateCounter();
})
function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length;
    ramainingCounterEl.innerText = textAreaEl.getAttribute("maxlength")- textAreaEl.value.length;
}
