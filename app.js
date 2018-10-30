function onReady() {
  const toDos = [];

  // html form
  const addToDoForm = document.getElementById('addToDoForm');

  // updates array of to-dos
  function createNewToDo() {

    // gets text for the title of each to-do
    const newToDoText = document.getElementByID('newToDoText');
    if (!newToDoText.value) { return; }
    // adds to-do to array
    toDos.push({
      // assigns value of text input to the "title" key
      title: newToDoText.value,
      complete: false
    });


    newToDoText.value = '';
// should be called each time the state changes


    renderTheUI();
  }


  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    // sets li to empty string before the function
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      // create li and checkbox
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      // adds title next to newLi
      newLi.textContent = toDo.title;
      // updates the DOM
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
  });
 }


// event listener
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });


  renderTheUI();
}


window.onload = function() {
  onReady();
};
