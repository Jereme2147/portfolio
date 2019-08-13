let tablet = window.matchMedia("(min-width: 600px)");
let desktop = window.matchMedia("(min-width: 950px)");
let currentView = "about"; //current view page
let previousView = "about"; //previous view page

$(document).ready(function() {
    let leftMargin = "0";
    if (tablet.matches) {
        leftMargin = "5px";
    }
    // if (desktop.matches) {
    //     $("#content").addClass("contentCenter");
    // }
    // $(".example").click(function() {
    //     let id = $(this).attr("id");
    //     expand(id);
    // });
    $("#iDo").show(function() {
        $("#iDo").animate({ marginLeft: leftMargin }, 500);
        $("#iDoButton").addClass("selected");
    });
    $(".drop").click(function() {
        drop(currentView, previousView);
    });
    $("#iDoButton").click(function() {
        hideContent();
        $("#iDo").toggle();
        $("#iDo").animate(
            {
                marginLeft: leftMargin
            },
            500
        );
        $(this).addClass("selected");
        // if (desktop.matches) {
        //     // $("#content").addClass("contentCenter");÷
        // }
        currentView = "about";
        hidePrev(previousView);
    });
    $("#contactButton").click(function() {
        hideContent();
        $("#contact").toggle();
        $("#contact").animate(
            {
                marginLeft: leftMargin
            },
            500
        );
        $(this).addClass("selected");
        // if (desktop.matches) {
        //     $("#content").addClass("contentCenter");
        // }
        currentView = "contact";
        hidePrev(previousView);
    });
    $("#thingsButton").click(function() {
        hideContent();
        $("#things").toggle();
        $("#things").animate({ marginLeft: leftMargin }, 500);
        $(this).addClass("selected");
        // if (desktop.matches) {
        //     $("#content").addClass("contentCenter");
        // }
        currentView = "things";
        hidePrev(previousView);
    });
    $("#costButton").click(function() {
        hideContent();
        $("#cost").toggle();
        $("#cost").animate({ marginLeft: leftMargin }, 500);
        $(this).addClass("selected");
        // if (desktop.matches) {
        //     $("#content").addClass("contentCenter");
        // }
        currentView = "cost";
        hidePrev(previousView);
    });
    $("#email-message").click(function() {
        $(this).animate({ height: "100px" }, 300);
    });
    if (tablet.matches) {
    }
    if (desktop.matches) {
    }
});

//hides and resets back to original borders and opacity
function hideContent() {
    $("#iDo").hide();
    $("#iDo").css("marginLeft", "100%");
    $("#cost").hide();
    $("#cost").css("marginLeft", "100%");
    $("#contact").hide();
    $("#contact").css("marginLeft", "100%");
    $("#things").hide();
    $("#things").css("marginLeft", "100%");
    $("#contactButton").removeClass("selected");
    $("#costButton").removeClass("selected");
    $("#thingsButton").removeClass("selected");
    $("#iDoButton").removeClass("selected");
}

//this expands the content when the drop arrow is clicked.
function drop(current, previous) {
    let top = current + "Top";
    let arrow = current + "Drop";
    let bottom = current + "Bottom";
    if (current != "things") {
        $(`#${top}`).hide();
        //$(`#${top}`).slideUp("slow");
        // $(`#${top}`).animate({ marginLeft: "2000px" }, 1000);
        $(`#${arrow}`).hide();
        // $(`#${bottom}`).show();
        $(`#${bottom}`).fadeIn("slow");
        // $(`#${bottom}`).css({display: "flex", 
        //                     alignItems: "safe center",
        //                     backgroundColor: "black"});
        // if(current == 'about'){
        //     $(`#${bottom}`).css({padding: "20px 5px 5px 5px"});
        // };
    }
}
//collapses the divs from above function in prev window.
function hidePrev(previous) {
    $(`#${previous}Top`).show();
    $(`#${previous}Drop`).show();
    $(`#${previous}Bottom`).hide();
    previousView = currentView;
}

//expand thumbnails
function expand(id) {
    // setTimeout(() => {
    //     $(`#${id}`).css({
    //         height: "100%",
    //         position: "fixed",
    //         top: "0",
    //         left: "0",
    //         margin: "0",
    //         zIndex: "2"
    //     });
    // }, 1000);
    // $(`#${id}`).css({
    //     height: "200px",
    //     margin: "20px",
    //     borderRadius: "5px",
    //     border: "2px solid",
    //     borderColor: "rgb(24, 24, 24)",
    //     zIndex: "0"
    // });

    $(`#${id}`).css({
        height: "600px"
    });
    setTimeout(() => {
        $(`#${id}`).css({
            height: "200px"
        });
    }, 1000);


}
