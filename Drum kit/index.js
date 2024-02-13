//decting button press

numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
}


document.addEventListener("keypress", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);

});

//detecting keybord press

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //default sound for tom-1 button
      tom1.play();
      break;
    
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); //default sound for tom-2 button
      tom2.play();
      break;
    
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3"); //default sound for tom-3 button
      tom3.play();
      break;
      break;
    
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3"); //default sound for tom-4 button
      tom4.play();
      break;
      break;
    
    case "j":
      var snare = new Audio("sounds/snare.mp3"); //default sound for snare button
      snare.play();
      break;

      case "k":
      var crash = new Audio("sounds/crash.mp3"); //default sound for crash button
      crash.play();
      break;

      case "l":
      var kick = new Audio("sounds/kick-bass.mp3"); //default sound for kick button
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentkey){

   var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")},50);
}
