import * as elements from './elements.js'
import state from './state.js'
import * as actions from './actions.js'
import { kitchenTimer } from './sounds.js'

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds
  
  if(minutes < 0) {
    minutes = 0
    state.minutes = 0
  }

  elements.minutes.textContent = String(minutes).padStart(2, '0')
  elements.seconds.textContent = String(seconds).padStart(2, '0')
}

export function countdown() {
  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)
  let miliseconds = state.miliseconds
  
  if(!state.isRunning) {
    state.miliseconds = miliseconds
    return
  }
  
  miliseconds--

  if(miliseconds < 0) {
    miliseconds = 99
    seconds--
  }

  if(seconds < 0) {
    seconds = 59
    minutes--
  }

  if(minutes < 0) {
    actions.stop()
    kitchenTimer.play()
    return
  }

  state.miliseconds = miliseconds
  updateDisplay(minutes, seconds)

  setTimeout(() => countdown(), 10);
}