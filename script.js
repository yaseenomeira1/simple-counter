const num = document.querySelector(".counter"),
up = document.querySelector(".up"),
down = document.querySelector(".down");

counter = 0;

num.style.backgroundColor = 'blue';

up.addEventListener("click", ()=>{
    counter++;
    num.innerHTML = counter;
    num.style.backgroundColor = "green";
    checkForNum();
})

down.addEventListener("click", ()=>{
    counter--;
    num.innerHTML = counter;
    checkForNum();
})

function checkForNum(){
    if (counter < 0){
        num.style.backgroundColor = "red";
    }
    if (counter == 0){
        num.style.backgroundColor = 'blue';
    }
}