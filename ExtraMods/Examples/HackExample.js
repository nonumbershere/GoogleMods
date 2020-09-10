var NameHere = { // Creates the element "Namehere" as an example.
    Element1: function function_name(argument) {
    	// Code goes here.
    }, // PLEASE ADD THIS AFTER EVERY ELEMENT!
    ElementHolder: function(){} // We will add
}

   NameHere.ElementHolder.Example1 = function rainbow() {
   	document.body.style.transistion = '2s'; // Makes the smooth effect
   	// More code.
   }
/*
     COMMANDS:

     Runner > The trex's body.

     Runner.instance_ > Trex's effects

     Runner.instance_.setSpeed > The speed.

     TO FIND MORE JUST PRESS F12 Or ctrl-shift-i in chrome://dino
     AND TYPE "Runner.instance_."
     AND FIND THE GOOD ONES!!!!!!!!!!!!
*/


// TO LEARN HOW TO MAKE MOD MENUS GO DOWN!











































// MOD MENU'S

var menu = document.createElement('div'); // Creates the DIV element.
menu.innerHTML='<button onclick="NameHere.Element1();">Click Me!</button>'; // Html, learn some in here > https://www.w3schools.com/howto/
document.body.prepend(menu); // Prepends it!

/*
    OTHER CODE TO APPEND IT!

    append
    prepend
    insertBefore
    appendChild
*/