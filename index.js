


const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const moonBtn = document.querySelector('.moon-btn');
const sunBtn = document.querySelector('.sun-btn');

let darkmode = false;


sunBtn.addEventListener("click", sunBtnClick); 
moonBtn.addEventListener("click", MoonBtnClick); // Toggle dark mode on button click   


btn2.addEventListener("click", btn2Click);
btn1.addEventListener("click", btn1Click);
btn3.addEventListener("click", btn3Click);


function sunBtnClick() {
document.body.classList.remove("darkmode");
   document.body.classList.toggle("lightmode");
}

function MoonBtnClick() {
    document.body.classList.remove("lightmode");
    document.body.classList.toggle("darkmode");
   

}



function btn1Click() {
    btn1.classList.add("active");
    btn2.classList.remove("active")
    btn3.classList.remove("active");  
}

function btn2Click(){
    btn2.classList.add("active");
    btn1.classList.remove("active");    
    btn3.classList.remove("active");
}

function btn3Click(){
    btn3.classList.add("active");
    btn1.classList.remove("active");    
    btn2.classList.remove("active");    
}






