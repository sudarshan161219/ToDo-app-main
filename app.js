const input = document.querySelector('.todo-input');
const form = document.querySelector('.form')
const addBtn = document.querySelector('.addBtn')
const list = document.querySelector('.todo-list')
const msg = document.querySelector('.msg')
const statusLi = document.querySelector('.end-li')
const desktopstatusLiNum = document.querySelector('.desktop-num')
const mobilestatusLiNum = document.querySelector('.count')
const all = document.querySelector('.all')
const active = document.querySelector('.active')
const completedLi = document.querySelector('.completed')

let liEl = []

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (input.value === "") {
    msg.textContent = 'Please enter somthing....'
    msg.classList.add('show-msg')
    setTimeout(() => msg.classList.remove('show-msg'), 2000)
  } else {
    add()
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

  <span class="my-circle" ></span>
  <p>${value}</p>
   <img class="remove" src="./images/icon-cross.svg" alt="icon">
`
  list.appendChild(listItem)
  liEl.push(listItem)
  remove(listItem)
  completed()
  checkFn()
  desktopstatusLiNum.textContent = liEl.length
  mobilestatusLiNum.textContent = liEl.length
}


function completed() {
  const tick = document.querySelectorAll('.my-circle')
  const liItem = document.querySelectorAll('.li')
  tick.forEach((item, idx) => (
    item.addEventListener("click", (e) => {
      if (!liItem[idx].classList.contains('tick-li')) {
        e.target.classList.toggle('tick')
        liItem[idx].classList.toggle('tick-li')
      }
    })
  ))
}


function remove(listItem) {
  const removeBtn = document.querySelectorAll('.remove')
  const liItem = document.querySelectorAll('.li')
  const clearCompleted = document.querySelector('.clear')
  removeBtn.forEach((btn, idx) => (
    btn.addEventListener('click', () => {
      liItem[idx].remove()
      DstatusFn(listItem)
    })
  ))

  clearCompleted.addEventListener("click", () => {
    liItem.forEach((li, idx) => {
      if (li.classList.contains('tick-li')) {
        liItem[idx].remove()
        DstatusFn(listItem)
      }
    })
  })
}


function DstatusFn(listItem) {
  liEl.pop(listItem)
  desktopstatusLiNum.textContent = liEl.length
  mobilestatusLiNum.textContent = liEl.length
}



function checkFn() {
  const liItem = document.querySelectorAll('.li')

  liItem.forEach((li) => {
    all.addEventListener("click", () => {
      li.style.display = 'flex'
    })

    active.addEventListener("click", () => {
      if (li.classList.contains('tick-li')) {
        li.style.display = 'none'
      }
      if (!li.classList.contains('tick-li')) {
        li.style.display = 'flex'
      }
    })

    completedLi.addEventListener("click", () => {
      if (!li.classList.contains('tick-li')) {
        li.style.display = 'none'
      }
      if (li.classList.contains('tick-li')) {
        li.style.display = 'flex'
      }
    })

  })

}

