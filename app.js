const input = document.querySelector('.todo-input');
const form = document.querySelector('.form')
const addBtn = document.querySelector('.addBtn')
const list = document.querySelector('.todo-list')
const msg = document.querySelector('.msg')
const statusLi = document.querySelector('.end-li')
const desktopstatusLiNum = document.querySelector('.desktop-num')
const mobilestatusLiNum = document.querySelector('.count')
const clearCompleted = document.querySelector('.clear')
const all = document.querySelector('.all')
const active =  document.querySelector('.active')
const completedLi =  document.querySelector('.completed')


let liEl = []

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (input.value === "") {
    msg.textContent = 'Please enter somthing....'
    msg.classList.add('show-msg')
    setTimeout(() => msg.classList.remove('show-msg'), 2000 )
  } else {
    add()
    // checkFn ()
    statusLi.classList.add('show-end-li')
  }
})

function add() {
  const inputValue = input.value
  input.value = ''
  element(inputValue)
}

function element(value) {
  const listItem = document.createElement('li')
  listItem.className = "li"
  listItem.innerHTML = `
  <div class="list-items" >
  <span class="my-circle" ></span>
  <p>${value}</p>
   <img class="remove" src="./images/icon-cross.svg" alt="icon">
  </div>`
  list.appendChild(listItem)
  liEl.push(listItem)
   remove(listItem)
 completed() 
  desktopstatusLiNum.textContent = liEl.length
  mobilestatusLiNum.textContent = liEl.length

}


function completed() {
  const tick = document.querySelectorAll('.my-circle')
  const liItem = document.querySelectorAll('.li')
  tick.forEach((item, idx) => (
    item.addEventListener("click", (e) => {
      if (!liItem[idx].classList.contains('tick-li')) {
        e.target.classList.add('tick')
        liItem[idx].classList.add('tick-li')
      } else if (liItem[idx].classList.contains('tick-li')) {
        e.target.classList.remove('tick')
        liItem[idx].classList.remove('tick-li')
      }
    })
  ))
}



function remove(listItem) {
  const removeBtn = document.querySelectorAll('.remove')
  const liItem = document.querySelectorAll('.li')
  removeBtn.forEach((btn, idx) => (
    btn.addEventListener('click', () => {
      liItem[idx].remove()
      DstatusFn(listItem)
    })
  ))

  clearCompleted.addEventListener("click", () => {
    liItem.forEach((li) => {
      if (li.classList.contains('tick-li')) {
        li.remove()
      } if(liEl.length === 0){
        msg.textContent = 'nothing to clear....'
        msg.classList.add('show-msg')
        setTimeout(() => msg.classList.remove('show-msg'), 2000 )
      }
      DstatusFn(listItem)
    })

  })
}




function DstatusFn(listItem) {
  liEl.pop(listItem)
  desktopstatusLiNum.textContent = liEl.length
  mobilestatusLiNum.textContent = liEl.length
}

// const all = document.querySelector('.all')
// const active =  document.querySelector('.active')
// const completedLi =  document.querySelector('.completed')

function checkFn () {

  const liItem = document.querySelectorAll('.li')

  liItem.forEach((li) => {
     active.addEventListener("click", () => {
    if(li.classList.contains('tick-li')){
      li.style.display = 'none'
    }
  })
  })

  // all.addEventListener("click", () => {

  // })

 

  // completedLi.addEventListener("click", () => {
  //   if(listItem.classList.contains('li')){
  //     listItem.style.display = 'none'
  //   }
  // })

}