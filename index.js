const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector('btn2');
const btn3 = document.querySelector('btn3');

btn1.addEventListener("click", btn1Click);
btn2.addEventListener("click", btn2Click);

function btn1Click() {
    btn1.classList.toggle("active");
    btn2.classList.remove("active");    
    btn3.classList.remove("active");
}

function btn2Click(){}