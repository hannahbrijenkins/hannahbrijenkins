/*
TO DO

When the screen is a certain size, I want the menu to be a drop down select menu
When you click on the menu icon, the icon changes colors the menu fills up the entire screen with a growing animation.
When a selection is clicked, the text changes colors, the menu disappears, and the browser goes to the correct section of the page
*/

function mediaQ () {
    let query = window.matchMedia('(max-width: 320px)');
    var menu = document.getElementById("nav-bar");

    if (query.matches) { 
        console.log("It worked");
        menu.classList.add("hide");
    }
};
//BUG HERE, stopped
//click menu transformation
function menuIcon(x) {
    x.classList.toggle("change");
}
//call display none function
mediaQ();