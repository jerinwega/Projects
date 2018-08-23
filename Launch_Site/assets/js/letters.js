var letters = document.getElementsByClassName("letter");

function displayLetters() {
   for(var i = 0; i < letters.length; i++) {
     createTimer(i);
   }
}

function createTimer(index) {
  setTimeout(function() {
    letters[index].classList.add("letter-active");
    
  }, index * 150);
}

displayLetters();