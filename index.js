
 for(var i = 0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",handleClick);
 }


//mouse click
function handleClick() {
    var thisButton = this.innerHTML;
    var keyPrs = this.innerHTML;

    console.log(this.innerHTML);
    switch (thisButton) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            buttonAnimation(keyPrs);
            break;
        default:
            break;
    }
}


//key press
document.addEventListener("keypress",function(ent){
makesound(ent.key);
buttonAnimation(ent.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
}
}
function buttonAnimation(keypressed){
var activeButton = document.querySelector("." + keypressed);
activeButton.classList.add("pressed");
setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100);
        }

    