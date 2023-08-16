

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function (params) {
        makesound(this.innerHTML);
        addAnimation(this.innerHTML);
    })
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    addAnimation(event.key);
})

function makesound(params) {
    switch (params) {
        case "w":

            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":

            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":

            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":

            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":

            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":

            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":

            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;


        default:
            break;
    }

}

function addAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (params) {
        document.querySelector("."+key).classList.remove("pressed");
    },1000);
    

}