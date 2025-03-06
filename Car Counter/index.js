let countEl = document.getElementById("countertxt");
let saveEl = document.getElementById("previous-txt");
let count = 0;
//Incremental function

function increment() {
  count += 1;
  countEl.textContent = count;
}
//Decremental function
function decrement() {
  count -= 1;
  countEl.textContent = count;
}
// save function
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
}
