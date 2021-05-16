
let inputbox = document.querySelector(".inputBox");
let addbtn = document.querySelector(".addBtn");
let todolist = document.querySelector(".todoList");

let inputVal = '';
inputbox.addEventListener("input", (e) => {
  inputVal = e.target.value;
});

let finishTodo = new Set();
addbtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!inputVal) {
    inputbox.focus();
  } 
  else {
    let newTodo = document.createElement('li');
      newTodo.innerText = inputVal;
    let doneBtn = document.createElement('button');
      doneBtn.innerText = "Done";

    
    todolist.appendChild(newTodo);
    newTodo.appendChild(doneBtn);
    
    all = document.querySelectorAll('li');
    all.forEach(function(t, i){
      if (i >= 0) {
        t.classList.add('donebtn');
      }
    });

    inputbox.value = '';
    inputVal = '';
    inputbox.focus();

    let isTodoDone = false;
    if (doneBtn) {
      doneBtn.addEventListener("click", () => {
        if (!isTodoDone) {
          finishTodo.add(newTodo);
          console.log(finishTodo);

          finishTodo.forEach((todo) => {
            todo.style.textDecoration = "line-through";
            todo.remove(finishTodo);
          });
          doneBtn.innerText = "X";
          isTodoDone = true;
        } 
        else {
          //let todo = doneBtn.parentElement;
          //finishTodo.delete(todo);
          console.log(finishTodo);

          //todo.style.textDecoration = "none";
          //doneBtn.innerText = "delete";
          //isTodoDone = false;
        }
      });
    }
  }
});
