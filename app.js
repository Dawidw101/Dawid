const btn = document.querySelector("#btn");
const clear = document.querySelector("#clear");
const list = document.querySelector("#list");
const el = document.getElementsByTagName("li");
const input = document.querySelector("#input");
const aaa = document.querySelector("#butt");


aaa.addEventListener("click", function (event) {
  alert(0)
});

const ZX = document.getElementsByClassName("XY")[0]
ZX.addEventListener("click", function (evt) {
  evt.stopPropagation();
  evt.returnValue = false;
  evt.preventDefault();
  console.log(evt)
  alert(1)
});

const focusInput = function () {
  input.focus();
};

const zaznaczzrobione = function (evt) {
  evt.stopPropagation();
  console.log("jestem zaznaczzrobione");
  console.log(this.parentNode.classList.toggle("checked"));
  console.log(this.parentNode)
};
const zaznaczzrobione1 = function (evt) {
  console.log(evt);
  evt.preventDefault();
  console.log("jestem zaznaczzrobione1");
  console.log(this.classList.toggle("checked"));
  console.log(this)
};

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
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
    div.addEventListener("click", zaznaczzrobione);
    div.className = "selection";
    div.innerText = txt;

    li.appendChild(div);
    list.appendChild(li);
    input.value = "";
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    document.querySelectorAll(".selection").onclick = function (event) {
      event.target.classList.toggle("checked");
    };

    editButton.innerText = "Edit";
    deleteButton.innerText = "x";

    deleteButton.onclick = function (del) {

      if (confirm("Are you sure you want to delete task?")) {
        let item = del.target.parentNode;
        item.remove();
      } else {
        del.stopPropagation();
      }
      focusInput();
    };

////////////////////////////////////////////////////////////////


    editButton.onclick = function(v) {
      v.stopPropagation();
      editButton.innerText = "OK"
      editButton.style = "background: blue;"
      div.contentEditable = true;
      div.focus();
      //Dalej się zawiesiłem. Chyba potrzebuję teraz zamienić div na input.
      //Próbowałem pobrać wartość z diva za pomocą inner HTML ale nie mogłem nigdzie znaleźć jak dokładnie to powinno wyglądać.
    };



////////////////////////////////////////////////////////////////


    li.appendChild(editButton);
    focusInput();

    li.appendChild(deleteButton);
    focusInput();
  }
};

clear.onclick = function () {
  if (confirm("Are you sure you want to clear list?")) {
    localStorage.clear();
    location.reload();
  }
  
}
window.onload = function () {
  focusInput();
};