const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const result = document.querySelector("#counter");
let counter = 0;

prevBtn.addEventListener('click', function(event){
    counter--;
    result.innerText = counter;
    checkResult();
})
nextBtn.addEventListener('click', function(event){
    counter++;
    result.innerText = counter;
    checkResult();
})

function checkResult(){
    if(counter > 0){
        result.style.color = "green";
    }else if(counter === 0){
        result.style.color = "#333333";
    }
    else if(counter <0){
        result.style.color = "red";
    }
}
