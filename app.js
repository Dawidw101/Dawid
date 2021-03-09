const btn = document.querySelector("#btn");
const clear = document.querySelector("#clear");
const list = document.querySelector("#list");
const el = document.getElementsByTagName("li");
/////////////////////////////////////////////////////const input0 = document.querySelector("#input");
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

const focusInput = function (input) {
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
    const li = document.createElement("li");
   
    li.onclick = zaznaczzrobione1;
    let div = document.createElement("div");
    div.addEventListener("click", zaznaczzrobione);
    div.className = "selection";
    div.innerText = txt;
    div.id = Math.random() * 1000;

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
      focusInput(input);
    };

////////////////////////////////////////////////////////////////


    editButton.onclick = function(v) {
      v.stopPropagation();

      if (editButton.innerText === "OK") {

        editButton.innerText = "Edit"
        editButton.style = "background: #c90000;"
       const input = document.getElementById("input-" + div.id)
        li.removeChild(input)
       const el = document.createElement("div")
       el.innerText = input.value
       ////////////////////////////////////////////////////////////////if (input.value == "") {
       //////////////////////////////////////////////////////////////// li.remove();
      ////////////////////////////////////////////////////////////////}
       el.id = div.id
       editButton.blur();
       focusInput(input0);
       el.onclick = zaznaczzrobione1;
       li.prepend(el)
       
      } else {

      editButton.innerText = "OK"
      editButton.style = "background: blue;"

      const el = document.getElementById(div.id)
      console.log(el.innerText)
      
      li.removeChild(el);
      const input = document.createElement('input');
      input.value = el.innerText;
      input.id = "input-" + div.id;
      li.prepend(input)
      focusInput(input);
      }
    };
    
////////////////////////////////////////////////////////////////


    li.appendChild(editButton);

    li.appendChild(deleteButton);
    focusInput(input);
  }
};

clear.onclick = function (s) {
  if (confirm("Are you sure you want to clear list?")) {
    //localStorage.clear();

    while (list.firstChild) 
    {
      list.removeChild(list.firstChild);
    }
    
    focusInput(input);
  }
  
}
window.onload = function () {
  focusInput(input);
};