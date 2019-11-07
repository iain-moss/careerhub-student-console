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
