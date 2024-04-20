import * as actions from './actions.js'
import state from './state.js'
import * as elements from './elements.js'
import * as timer from './timer.js'

export function registerButtons() {
  document.addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
      return
    }
    
    console.log(e.target.id)
    actions[e.target.id]()
  })
}

export let haveActiveCard = false

export function selectOnly1Card() {
  const element = document.getElementById('sounds')

  document.querySelector('#sounds').addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON') {
      return
    }

    for(const child of element.children) {
      if(child.classList.contains('active')) {
        haveActiveCard = true
      }
    }
    
    if(haveActiveCard == true) {
      if(e.target.classList.contains('active')) {
        document.getElementById(`${e.target.id}`).classList.toggle('active')
        state.isMusicOn = document.documentElement.classList.toggle('music-on')
        haveActiveCard = false
      }

      return
    }

    document.getElementById(`${e.target.id}`).classList.toggle('active')
    state.isMusicOn = document.documentElement.classList.toggle('music-on')
  })
}

export function editMinutesAndSeconds() {
  elements.minutes.addEventListener('click', (e) => {
    elements.minutes.setAttribute('contenteditable', true)
  })

  elements.seconds.addEventListener('click', (e) => {
    elements.seconds.setAttribute('contenteditable', true)
  })
}

export function setMinutesAndSeconds() {
  elements.minutes.onkeypress = (e) => /\d/.test(e.key)
  elements.seconds.onkeypress = (e) => /\d/.test(e.key)

  elements.minutes.addEventListener('blur', (e) => {
    let time = e.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time

    timer.updateDisplay()
    elements.minutes.removeAttribute('contenteditable')
  })

  elements.minutes.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
      let time = e.currentTarget.textContent
      time = time > 60 ? 60 : time
  
      state.minutes = time
  
      timer.updateDisplay()
      elements.minutes.removeAttribute('contenteditable')
    }
  })

  elements.seconds.addEventListener('blur', (e) => {
    let time = e.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.seconds = time

    timer.updateDisplay()
    elements.seconds.removeAttribute('contenteditable')
  })

  elements.seconds.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
      let time = e.currentTarget.textContent
      time = time > 60 ? 60 : time

      state.seconds = time

      timer.updateDisplay()
      elements.seconds.removeAttribute('contenteditable')
    }
  })
}