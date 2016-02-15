

// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.


// get value of the text input
var input = document.getElementById('input');

var getValue = document.querySelector('#btn');




getValue.addEventListener('click',function(event) {
    var newItem = document.createElement("li")
    newItem.innerHTML = '<a href="#">' + input.value +'</a>'
    var list = document.querySelector('ul');
    list.appendChild(newItem);
    input.value = "";

});


document.querySelector('ul').addEventListener('click', function(event){
    var itemRemove = event.target;
    itemRemove.remove();
})
