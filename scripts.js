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
