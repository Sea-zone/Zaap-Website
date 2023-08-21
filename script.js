let i = 0;
let a = setInterval(displaymessage);

function displaymessage() {
  if (i !== 143) {
    document.getElementById("demo").innerHTML = `<h1>${i}</h1>`;
    i++;
    return;
  }
  clearInterval(a);
}
