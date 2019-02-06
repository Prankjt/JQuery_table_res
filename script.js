"use strict";

$(document).ready(function () {

    let selectedTable;
    let name;
    let phone;
    let guests;

    // ASSIGNING TABLE NUMBER UPON CLICK & SHOWING FORM
    $(".table").click((event) => {
      selectedTable = $(event.target);
      if ($(selectedTable).hasClass("available")) {
        $(".num-table").text($(event.target).val());
        $(".modal").fadeIn(1200);
      }
    })

    // WHEN SAVE IS CLICKED -> HIDES FORM, CHANGES CLASS, LOGS INFO, CLEARS FORM
  $(".save-btn").click(() => {
    $(".modal").fadeOut(1200);
    selectedTable.addClass("reserved");
    selectedTable.removeClass("available");
    name = $("#name").val();
    phone = $("#phone").val();
    guests = $("#size").val();
    selectedTable.attr("name", name);
    selectedTable.attr("phone", phone);
    selectedTable.attr("size", guests);
    $("input").val("");
  })

   // HOVER TO SEE RESERVED TABLE INFO
  //  $(document).on("mouseenter", ".table", (event) => {
  //   if ($(event.target).hasClass("reserved")) {
  //     $(event.target).append(`
  //     <section class="tooltip"
  //     Name: ${$(event.target).attr("name")}
  //     Phone: ${$(event.target).attr("phone")}
  //     Guests: ${$(event.target).attr("guests")}
  //     </section>`);
    }

    //displaying the tooltip
    $(document).on("mouseenter", ".table", (event) => {
        if ($(event.target).attr("name") && $(event.target).attr("phone") && $(event.target).attr("guests")) {
            $(event.target).append(`
      <section class="tooltip">
        Name: ${$(event.target).attr("name")}
        Phone: ${$(event.target).attr("phone")}
        Guests: ${$(event.target).attr("guests")}
      </section>
      `);

  }).on("mouseleave", (event) => {
    $("section").remove().html("");
  })
// })   
          // ADDS THE HOVER FEATURE THAT DISPLAYS TABLE AS RED 
    $(document).on("mouseenter", ".available", function (e) {
        $(e.target).toggleClass("hover")
    });

    $(document).on("mouseleave", ".available", function (e) {
        $(e.target).toggleClass("hover")
    });


    // let table = null;
    // $(document).on("click", ".available", function (e) {
    //     table = e.target;
    //     $("form").fadeIn(1500);
    // });

    // $(document).on("click", "button", function (e) {
    //     $(table).removeClass("available").addClass("reserved");
    //     $("form").fadeOut(1500);
    // });

    // // save the info provided on the form
    // $(document).on("click", "button", (event) => {
    //     container
    //         .attr("name", $("form-input").eq(0).val())
    //         .attr("phone", $("form-input").eq(1).val())
    //         .attr("guests", $("form-input").eq(2).val());
    //     $("form-input").each(function () {
    //         $(this).val("");
    //     });
    // });
    // //displaying the tooltip
    // $(document).on("mouseenter", ".table", (event) => {
    //     if ($(event.target).attr("name") && $(event.target).attr("phone") && $(event.target).attr("guests")) {
    //         $(event.target).append(`
    //   <section class="tooltip">
    //     Name: ${$(event.target).attr("name")}
    //     Phone: ${$(event.target).attr("phone")}
    //     Guests: ${$(event.target).attr("guests")}
    //   </section>
    //   `);
    //     }
    // });
    //removing the tooltip
    $(document).on("mouseleave", ".table", (event) => {
        $(".tooltip").remove();
    });
    

    // Get the modal
    let modal = $("#myModal")[0];

    // Get the button that opens the modal
    // let btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    let span = $(".close")[0];

    // When the user clicks on a table, open the modal 
    // $(".table").click(function () {
    //     $(".modal").css({
    //         "display": "block"
    //     });
    // });

    // When the user clicks on <span> (x), close the modal
    $(".close").click(function () {
        $(".modal").css({
            "display": "none"
        })
    });

    // $(".save-btn").click(function () {
    //     $(".modal").css({
    //         "display": "none"
    //     });
    //     $("body").css({
    //         "overflow-y": "auto"
    //     }); //Prevent double scrollbar.
    // });

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
    // }
    // });
