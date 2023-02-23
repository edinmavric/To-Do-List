let list = document.getElementById("list");
let addBtn = document.getElementById("addBtn");
let listLis = document.querySelectorAll("li");
let listUl = document.querySelector("ul");
let closeBtn = document.getElementsByClassName("close");

let toDoList = document.querySelector(".todo-list");

for (let i = 0; i < listLis.length; i++) {
  let x = document.createElement("span");
  let text = document.createTextNode("x");
  x.className = "close";
  x.appendChild(text);
  listLis[i].appendChild(x);
}

for (i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

const newTodo = () => {
  let input = document.getElementById("mainInput").value;
  let li = document.createElement("li");
  let txt = document.createTextNode(input);

  li.appendChild(txt);

  if (input === "") {
    alert("Don't skip tasks!");
  } else {
    list.appendChild(li);
    toDoList.style.backgroundColor = "#52f2e8";
    input = "";
  }

  li.addEventListener("click", function () {
    li.classList.toggle("clickable-list");
  });

  let x = document.createElement("span");
  let text = document.createTextNode("x");
  x.className = "close";
  x.appendChild(text);
  li.appendChild(x);

  for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
      if (confirm("Are you sure you want to delete this task?") == true) {
        let div = this.parentElement;
        div.style.display = "none";
        input = "";
      }
    };
  }
};

addBtn.addEventListener("click", newTodo);
listUl.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);
