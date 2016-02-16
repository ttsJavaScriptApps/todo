

// Show an unordered list of todo's
// Show an input to enter a new todo
// Show a button to add a todo. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed
// Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second.
// get value of the text input
var input = document.getElementById('input');
var toDoList = document.querySelector('ul');
var addNewItemBtn = document.querySelector('#btn');

addNewItemBtn.addEventListener('click',function(event) {
  var newItem = document.createElement("li")
  newItem.innerHTML = '<a href="#">' + input.value +'</a>'
  toDoList.appendChild(newItem);
  input.value = "";
});

toDoList.addEventListener('click', function(event){
  var itemRemove = event.target;
  var itemParent = event.target.parentElement;
  // console.log(itemParent);
  itemRemove.style["text-decoration"] = 'line-through';
	setTimeout(function(){ 
		itemRemove.remove();
		itemParent.remove();
	}, 1000);
})
