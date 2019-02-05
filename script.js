"use strict";


$(document).ready(function() {

let table = null;
$(document).on("click", ".available", function(e) {
    table = e.target;
    $("form").fadeIn(1500);    
});

$(document).on("mouseenter", ".available", function(e) {
    $(e.target).toggleClass("hover")
});

$(document).on("mouseleave", ".available", function(e) {
    $(e.target).toggleClass("hover")
});

$(document).on("click", "button", function(e) {
    $(table).removeClass("available").addClass("reserved");
    $("form").fadeOut(1500);
});

// Get the modal
let modal = $("#myModal")[0];

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = $(".close")[0];

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