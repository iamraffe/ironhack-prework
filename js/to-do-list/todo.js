
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var toDoText = document.createTextNode(document.getElementById("todo-input").value);
    var toDoList = document.querySelector('ul.todo-list-items');
    var toDoItem = document.createElement("li");
    toDoItem.appendChild(toDoText);
    toDoList.appendChild(toDoItem);
    document.getElementById("todo-input").value = '';
  }

  function markAsDone() {
    if(document.getElementsByClassName('todo-list-items')[0].children.length > 1){
      doneButton.classList.add('liked');
      doneButton.innerHTML = "Liked!";
      document.querySelector('h1').style.color = "red";
      var doneList = document.querySelector('ul.done-list-items');
      var doneItem = document.querySelector('ul.todo-list-items > li');
      doneItem.setAttribute("class", "done");
      doneList.appendChild(doneItem);
    }
    else{
      alert("No more items in to do list, my friend");
    }
  }

}
