let a = document.getElementById('a');
let b = document.getElementById('b');
let Result = document.getElementById('Result');
function Addition() {
    Result.innerText =  (parseInt(a.value) + parseInt(b.value));
}
function  Subtraction() {
    Result.innerText = (parseInt(a.value) - parseInt(b.value));
}
function  Multiplicaption() {
    Result.innerText = (parseInt(a.value) * parseInt(b.value));
}
function  Divison() {
    Result.innerText = (parseInt(a.value) / parseInt(b.value));
}

