const button = document.querySelector(".button");
const circle = document.querySelector(".circle");

let buttonOn = false;

button.addEventListener("click", ()=>{
    if(!buttonOn)
    {
        buttonOn = true;
        circle.style.animation = "moveCircleRight 0.5s forwards";
        button.style.animation = "transformToYellow 0.5s forwards";
    }
    else{
        buttonOn = false;
        circle.style.animation = "moveCircleLeft 0.5s forwards";
        button.style.animation = "transformToBlue 0.5s forwards";
    }
});