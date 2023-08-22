let counts = setInterval(updated);
let upto = 0;
function updated() {
  let count = document.getElementById("counter1");
  count.innerHTML = ++upto;
  if (upto === 142) {
    clearInterval(counts);
  }
}

let counts2 = setInterval(updated2, 25);
let upto2 = 0;
function updated2() {
  let count = document.getElementById("counter2");
  console.log(counts2);
  count.innerText = ++upto2;
  if (upto2 === 28) {
    clearInterval(counts2);
  }
}

let counts3 = setInterval(updated3, 15);
let upto3 = 0;
function updated3() {
  let count = document.getElementById("counter3");
  count.innerHTML = ++upto3;
  if (upto3 === 53) {
    clearInterval(counts3);
  }
}

let counts4 = setInterval(updated4, 10);
let upto4 = 0;
function updated4() {
  let count = document.getElementById("counter4");
  count.innerHTML = ++upto4;
  if (upto4 === 90) {
    clearInterval(counts4);
  }
}
