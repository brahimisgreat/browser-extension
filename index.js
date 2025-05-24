


const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const sunBtn = document.querySelector('.sun-btn');

let darkmode = false;


sunBtn.addEventListener("click", sunBtnClick);    


btn2.addEventListener("click", btn2Click);
btn1.addEventListener("click", btn1Click);
btn3.addEventListener("click", btn3Click);


function sunBtnClick() {
   document.body.classList.toggle("lightmode");
   document.querySelector("header").classList.toggle("headerLight");
}



function btn1Click() {
    btn1.classList.toggle("active");
    btn2.classList.remove("active");  
}

function btn2Click(){
    btn2.classList.toggle("active");
    btn1.classList.remove("active");    
    btn3.classList.remove("active");
}

function btn3Click(){
    btn3.classList.toggle("active");
    btn1.classList.remove("active");    
    btn2.classList.remove("active");    
}






