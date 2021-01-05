const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const el = document.getElementsByTagName("li");
const input = document.querySelector("#input");

const focusInput = function () {
  input.focus();
};
const zaznaczzrobione = function () {
  console.log("jestem zaznaczzrobione");
  console.log(this.parentNode.classList.toggle("checked"));
};
const zaznaczzrobione1 = function () {
  //v.parentNode.classList.toggle("checked");
  console.log("jestem zaznaczzrobione1");
  this.preventDefault();
  console.log(this.classList.toggle("checked"));
  //console.log(v.parentNode);
};

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});

btn.onclick = function () {
  var txt = input.value;
  if (txt == "") {
    alert("Musisz wpisać zadanie");
  } else {
    li = document.createElement("li");
    li.onclick = zaznaczzrobione1;
    let div = document.createElement("div");
    div.onclick = zaznaczzrobione;
    div.className = "selection";
    div.innerText = txt;

    li.appendChild(div);
    list.appendChild(li);
    input.value = "";
    let deleteButton = document.createElement("button");

    document.querySelectorAll(".selection").onclick = function (event) {
      console.log(event);
      console.log("loistoncliktriggerd");
      event.target.classList.toggle("checked");
    };

    deleteButton.innerText = "x";

    deleteButton.onclick = function (del) {
      alert(del);
      console.log(del);
      console.log(this);

      if (confirm("Are you sure you want to delete task?")) {
        let item = del.target.parentNode;
        item.remove();
      }
      focusInput();
    };
    li.appendChild(deleteButton);
    focusInput();
  }
};


window.onload = function () {
  focusInput();
};
