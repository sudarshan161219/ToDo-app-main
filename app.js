const inputTodo = document.querySelector(".todo-input");
const  addTodo = document.querySelector(".circle");
const element = document.querySelector(".todo-list");
const endLi = document.querySelector(".end-li")
const countNum = document.querySelector(".count")
let count = document.getElementsByTagName("li")


inputTodo.addEventListener("change", (e)=> {
  var check = document.createElement("img");
 var tag = document.createElement("li");
 var tick = document.createElement("span");
 tick.className = "myCircle";
 var img = document.createElement("img");
 var text = document.createTextNode(inputTodo.value);


  tag.appendChild(tick);
  tag.appendChild(text);
  tag.appendChild(img);
  element.appendChild(tag);
  inputTodo.value = '';
  endLi.classList.add("show-end-li")
 
   img.src= "images/icon-cross.svg" 
  

   countNum.innerHTML = count.length


   addTodo.addEventListener("click", (e)=> {
   tag.appendChild(text);
   tag.appendChild(img);
   element.appendChild(tag);
   inputTodo.value = '';


    
});


img.addEventListener("click", ()=> {
tag.remove();
countNum.innerHTML = count.length
});

tick.addEventListener("click", (e)=> {
tick.classList.add("tick")
tag.classList.add("tick-li")
tag.appendChild(check)
check.src="images/icon-check.svg"
check.classList.add("check-img");

});



});



