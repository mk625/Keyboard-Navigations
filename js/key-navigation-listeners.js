

// left right form navigation
$j(document).keydown(function (e) {
    var focusedElement = document.activeElement;
    var focusableContainer = $j(focusedElement).closest(".lr-focus-parent");
    if (!focusableContainer.length) return;
    var rightFocusableElements = $j(focusableContainer).find('.right-focus-parent').find('input:visible, button:visible, a:visible');
    var leftFocusableElements = $j(focusableContainer).find('.left-focus-parent').find('input:visible, button:visible, a:visible');

    if (e.key === 'ArrowRight') {
        if (rightFocusableElements.length) { rightFocusableElements.first().focus(); }
    } else if (e.key === 'ArrowLeft') {
        if (leftFocusableElements.length) { $j(".list-selected > button, .list-selected > a").focus(); }
    }
});
// \\\ left right form navigation



// dropdown options up down navigations
$j(document).on("keydown", function(event) {
    var $dropdown = $j(".dropdown-options-container.dropdown-opened");
    if ($dropdown.length) {
        var $buttons = $dropdown.find(".dropdown-list-btn");
        var $focused = $buttons.filter(":focus");
        var index = $buttons.index($focused);

        if (event.keyCode === 40) {
            event.preventDefault();
            if (index < $buttons.length - 1) {
                $buttons.eq(index + 1).focus();
            } else {
                $buttons.eq(0).focus();
            }
        } else if (event.keyCode === 38) {
            event.preventDefault();
            if (index > 0) {
                $buttons.eq(index - 1).focus();
            } else {
                $buttons.eq($buttons.length - 1).focus();
            }
        }
    }
});
// \\\ dropdown options up down navigations




$j(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        $j(".dropdown-options-container.dropdown-opened").removeClass("dropdown-opened");
    }
});



$j("body").on("click", function () {
    $j(".dropdown-options-container").removeClass("dropdown-opened");
});


