const inputTodo = document.querySelector(".todo-input");
const  addTodo = document.querySelector(".circle")

const element = document.querySelector(".todo-list")


inputTodo.addEventListener("change", (e)=> {
    var tag = document.createElement("li");
    var text = document.createTextNode(inputTodo.value);
    tag.appendChild(text);
    element.appendChild(tag);
    inputTodo.value = ''
})


addTodo.addEventListener("click", ()=> {
  var tag = document.createElement("li");
   var text = document.createTextNode(inputTodo.value);
   tag.appendChild(text);
   element.appendChild(tag);
   inputTodo.value = ''

})


