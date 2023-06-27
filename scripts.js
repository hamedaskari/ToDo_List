// // Selectors
let todoInput, todoButton, todoList, filter;
const $ = document;
todoInput = $.querySelector(".todo-input");
todoButton = $.querySelector(".todo-button");
todoList = $.querySelector(".todo-list");
filter = $.querySelector(".filter-todo");

function checkbtn(e) {
  e.preventDefault();
  //input user
  const inputuser = todoInput.value;
  if (inputuser) {
    //temp html for items
    const div = $.createElement(`div`);

    div.innerHTML = `
    <li class="todo-item">${inputuser}</li>
    <button class="check-btn"><i class="fas fa-check"></i></button>
    <button class="trash-btn"><i class="fas fa-trash"></i></button>
  `;
    todoInput.value = "";

    div.classList.add("todo");
    todoList.insertAdjacentElement("beforeend", div);

    const btnCheck = div.querySelector(".check-btn");

    const btnTrash = div.querySelector(".trash-btn");

    btnCheck.addEventListener("click", function () {
      div.classList.toggle("completed");
    });

    //event listener for trash btn
    btnTrash.addEventListener("click", function () {
      div.classList.add("fall");

      //remove item after...
      function remove() {
        div.style.opacity = "0";
        div.remove();
      }
      setTimeout(remove, 400);
    });
  } else {
    alert("please write somthing");
  }
}
//when click add list
todoButton.addEventListener("click", checkbtn);

//filter lists
let alltodo;

const loop = function (ifcontains, elsee) {
  alltodo.forEach((list) =>
    list.classList.contains("completed")
      ? (list.style.display = `${ifcontains}`)
      : (list.style.display = `${elsee}`)
  );
};
$.addEventListener("click", function () {
  alltodo = [...$.querySelectorAll(".todo")];

  if (filter.value === "completed") {
    loop("flex", "none");
  } else if (filter.value === "uncompleted") {
    loop("none", "flex");
  } else {
    alltodo.forEach((list) => (list.style.display = "flex"));
  }
});
