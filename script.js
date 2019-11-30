var button = document.getElementById("button");
var userInput = document.getElementById("userInput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

function inputLength() {
  return userInput.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  li.appendChild(document.createTextNode(userInput.value + " "));
  ul.appendChild(li).appendChild(delButton);
  delButton.innerHTML = "&#128465;";
  delButton.classList.add("delete")
  userInput.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function itemComplete(event) {
  if (event.target.localName !== "button") {
    event.target.classList.toggle("done")
  }
}

function deleteItem() {

}

button.addEventListener("click", addListAfterClick);

userInput.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", itemComplete)

ul.addEventListener("click", function(event) {
  console.log(event.target)
  if (event.target.className === "delete") {
    event.target.parentNode.remove()
  }
})
