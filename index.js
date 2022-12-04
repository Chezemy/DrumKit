var drumSounds = {
    w: "sounds/tom-1.mp3",
    a: "sounds/tom-2.mp3",
    s: "sounds/tom-3.mp3",
    d: "sounds/tom-4.mp3",
    j: "sounds/snare.mp3",
    k: "sounds/crash.mp3",
    l: "sounds/kick-bass.mp3"
  };

// Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}


//Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    var key = event.code[3].toLocaleLowerCase();
    makeSound(key);
    buttonAnimation(key);
})


//

function makeSound(key) {
    playAudio(drumSounds[key]);
}

//Playing audio 
function playAudio(audioPath) {
    var audio = new Audio(audioPath);
    audio.play();
}


function buttonAnimation(currentKey) {
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function() {
    activeButton.classList.remove("pressed");
   }, 100);
}