function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDolist');

// takes a type and a listener which is a function
// ES6 arrow function == standard anonymous function
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text //
    let title = newToDoText.value;

    // create new Li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create delete
    let minusBtn = document.createElement('button');
    minusBtn.innerHTML = '<span>Delete</span>' ;;


    // set the title
    newLi.textContent = title;

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);

    newLi.appendChild(minusBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';
  });
};

window.onload =  function() {
  onReady();
};
