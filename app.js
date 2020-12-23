const btn   = document.querySelector("#btn");
const list  = document.querySelector("#list");
const el    = document.getElementsByTagName("li");
const input = document.querySelector("#input");
const focusInput = function() {
    input.focus();
  };
input.addEventListener("keyup", function(event) {
    
    if (event.keyCode === 13) { 
        
        event.preventDefault();// Standardowy zapis - wytlumacze pozniej 
        // wywolaj funkcje tak jakby ktos zrobil click na ptzycisku
        btn.click();
      }
});

btn.onclick = function () {
  var txt = input.value;
  if (txt == "") {
    alert("Musisz wpisać zadanie");
  } else {
    li = document.createElement("li");
    li.innerHTML = '<div onclick = "zaznaczzrobione(this)">'+txt+'</div>';
    list.appendChild(li);
    input.value = "";
	
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    deleteButton.onclick = function (del) {
      if(confirm("Are you sure you want to delete task?")){
		  
          let item = del.target.parentNode;
          item.remove();//tu nalezy wpisac funkcje do usuwania zadania
      }
      focusInput();//tu tez musimy ustalic focus
    };
    li.appendChild(deleteButton);
    focusInput();//po delete tez focus
  }
};


list.onclick = function (ev) {
  if (ev.target.tagName == "LI") {
    ev.target.classList.toggle("checked");
  }
};

const zaznaczzrobione = function(v)
{
	v.parentNode.classList.toggle("checked");
	console.log(v)
console.log(v.parentNode);
}

window.onload = function () {
    //tu wykonują się rzeczy dopiero po PEŁNYM załadowaniu skryptu JS
    focusInput();
};