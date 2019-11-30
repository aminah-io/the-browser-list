//THE LIST PROJECT
/* In this project we are learning how to create a list of items on a browser. It will take some text that a user types into a form and append it to a list. We will create the long code and then refactor it to something that is DRY. We will continue iterating on this project until we have something really exquisite */

var button = document.getElementById("button");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");

// A refactored function - checks the length of the user input
function inputLength() {
  return userInput.value.length;
}

// The function to create the list element, can be reused by any of the functions or code
function createListElement() {
  /* Need to create the variable for the thing we are doing. In this case, we want to create a new 'li' item */
  var li = document.createElement("li");
  /* Next we need to perform the action on the item we just created the variable for above. In this case, we want to append the 'li' item to the bottom of the List element. We need to add a text node to be able to do that. But it isn't attached to the unordered list yet...in this case though we need to grab the text from the input, which means we need to access the value. So we need to add .value to the end */
  li.appendChild(document.createTextNode(userInput.value));
  /* Once we've got the necessary node situated, we can then append the list item to the list using appendChild */
  ul.appendChild(li);
  /* This returns the value of the input box to nothing so that the user cannot continue to click the button and enter the same thing they just entered */
  userInput.value = "";
}

function addListAfterClick() {
  /* This conditional checks to see if the value of the input from our form is greater than 0, did the user type something? If so, then we create the text and add it to the unordered list. If not, we don't do anything. */
  if (inputLength() > 0) {
    createListElement();
  }
}
// Still needs the 'event' argument from the browser
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement();
    }
}

function itemComplete() {

}

/* This was the ORIGINAL click function, the way it's normally setup. We extracted the code and created the one immediately after this: */
// button.addEventListener("click", function() {
// })
button.addEventListener("click", addListAfterClick);

/* Same thing as above, but listening for the keypress of 'Enter' within the input element -- and we can extract this code as well to do what we did with the button event listener */
// userInput.addEventListener("keypress", function (event) {
// })
userInput.addEventListener("keypress", addListAfterKeypress);

// li.addEventListener("click", function() {
//   var list = document.querySelector("li");
//   list.classList.toggle("done")
// })
