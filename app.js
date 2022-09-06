const inputTodo = document.querySelector(".todo-input");
const  addTodo = document.querySelector(".circle");
const element = document.querySelector(".todo-list");
const endLi = document.querySelector(".end-li")
const countNum = document.querySelector(".count")
let count = document.getElementsByTagName("li")
const todoList = document.querySelector(".todo-list")
const footer = document.querySelector(".footer")
const Circle = document.querySelector(".myCircle")

const all = document.querySelector(".all");
const active = document.querySelector(".active");
const completed = document.querySelector(".completed");
const clearCompleted = document.querySelector(".clear")

const dark = document.querySelector(".dark-icon")
const light = document.querySelector(".light-icon")

inputTodo.addEventListener("change", (e)=> {
  var check = document.createElement("img");
 var tag = document.createElement("li");
 var tick = document.createElement("span")
 tick.classList.add("my-circle")
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


   addTodo.addEventListener("click", ()=> {
    if(inputTodo.value){
    tag.appendChild(text);
   tag.appendChild(img);
   element.appendChild(tag);
   inputTodo.value = '';
    }
});


img.addEventListener("click", ()=> {
tag.remove();
countNum.innerHTML = count.length
});


tick.addEventListener("click", ()=> {
tick.classList.add("tick")
tag.classList.add("tick-li")
tag.appendChild(check)
check.src="images/icon-check.svg"
check.classList.add("check-img");




});


all.addEventListener("click", ()=>{
  tag.classList.remove("hideLi")
  tag.classList.add("showLi")
});

active.addEventListener("click", ()=>{
  if(tag.classList.contains("tick-li")){
    tag.classList.add("hideLi")

    }  if(!tag.classList.contains("tick-li")){
      tag.classList.remove("hideLi")
   
      }

});

completed.addEventListener("click", ()=>{
  if(!tag.classList.contains("tick-li")){
    tag.classList.add("hideLi")
    }  if(tag.classList.contains("tick-li")){
    tag.classList.remove("hideLi")
    }
});


clearCompleted.addEventListener("click", ()=>{
 
 if(tag.classList.contains("tick-li")){
  tag.remove();
countNum.innerHTML = count.length

  }

})



});



let elementBody = document.body;
var tick = document.createElement("span")
tick.className = ("my-circle")


light.addEventListener("click", ()=>{
elementBody.classList.toggle("light")
dark.classList.add("show-dark-icon")
light.classList.add("hide-light-icon")
addTodo.classList.add("light-circle")

inputTodo.classList.contains("todo-input") ? 
(inputTodo.classList.remove("todo-input") ,
 inputTodo.classList.add("light-todo-input")) : none

 addTodo.classList.contains("circle") ? 
(addTodo.classList.remove("circle") ,
 addTodo.classList.add("light-circle")) : none

tick.classList.contains("my-circle") ? 
( tick.classList.remove("my-circle") ,
  tick.classList.add("light-my-circle")) : none


 todoList.classList.contains("todo-list") ? 
 ( todoList.classList.remove("todo-list") ,
   todoList.classList.add("light-todo-list")) : none

   endLi.classList.contains("end-li") ? 
   (  endLi.classList.remove("end-li") ,
      endLi.classList.add("light-end-li")) : none

 footer.classList.contains("footer") ? 
 (footer.classList.remove("footer") ,
  footer.classList.add("light-footer")) : none


})

dark.addEventListener("click", ()=>{
elementBody.classList.toggle("light")
  dark.classList.remove("show-dark-icon")
  light.classList.remove("hide-light-icon")

  inputTodo.classList.contains("light-todo-input") ?
   (inputTodo.classList.remove("light-todo-input") ,
    inputTodo.classList.add("todo-input")) : none

    addTodo.classList.contains("light-circle") ? 
    (addTodo.classList.remove("light-circle") ,
     addTodo.classList.add("circle")) : none

     tick.classList.contains("light-my-circle") ? 
     ( tick.classList.remove("light-my-circle") ,
       tick.classList.add("my-circle")) : none

     todoList.classList.contains("light-todo-list") ? 
     ( todoList.classList.remove("light-todo-list") ,
       todoList.classList.add("todo-list")) : none

       endLi.classList.contains("light-end-li") ? 
       (  endLi.classList.remove("light-end-li") ,
          endLi.classList.add("end-li")) : none

     footer.classList.contains("light-footer") ? 
     (footer.classList.remove("light-footer") ,
      footer.classList.add("footer")) : none

  })



console.log(tick.classList.contains("my-circle"))