$(document).ready(function() {
    $(".dropdown").click(function() {
        $(this).find(".sub-menu").slideToggle();
    });
    $(document).on("click", function(event) {
        var $trigger = $(".dropdown");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".sub-menu").slideUp();
        };
    })
});

$(document).ready(function() {
    $("#resources-button").click(function() {
        $(this).find("#resources-show").slideToggle();
    });
    $(document).on("click", function(event) {
        var $trigger = $("#resources-button");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $("#resources-show").slideUp();
        };
    })
});

$(document).ready(function() {
    $("#apply-button").click(function() {
        $("#apply-button").hide();
        $("div.application-procedures").slideToggle();
    });
});

const panels = document.querySelectorAll(".panel");
const colours=["#789CCA", "#EF8F8D", "#FACA8F", "#F7A08E", "#9E82B5", "#EB96BB", "#94D2CE", "#ACD9E5", "#D3EAF0"];

panels.forEach((panel, i) => panel.style.borderTopColor = colours[i]);

// for (i = 0; i < panels.length; i++) {
//     panels[i].style.borderTopColor = colours[i];
// };
