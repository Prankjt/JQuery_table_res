"use strict";


$(document).ready(function() {




// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];

// When the user clicks on a table, open the modal 
$(".table").click(function() {
    $(".modal").css({"display":"block"});
});

// When the user clicks on <span> (x), close the modal
$(".close").click(function () {
    $(".modal").css({"display":"none"})
});

$(".save-btn").click(function(){
    $(".modal").css({"display":"none"});
    $("body").css({"overflow-y": "auto"}); //Prevent double scrollbar.
    });


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});