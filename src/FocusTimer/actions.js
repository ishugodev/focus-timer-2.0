import state from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import { haveActiveCard } from './events.js'

export function play() {
  state.isRunning = true
  document.documentElement.classList.add('running')

  timer.countdown()
}

export function pause() {
  state.isRunning = false
  document.documentElement.classList.remove('running')  
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  timer.updateDisplay()
}

export function plus() {
  state.minutes += 5
  timer.updateDisplay()
}

export function minus() {
  state.minutes -= 5
  timer.updateDisplay()
}

export function floresta() {
  if(state.isMusicOn && !haveActiveCard) {
    sounds.floresta.play()
    return
  }

  sounds.floresta.pause()
}

export function chuva() {
  if(state.isMusicOn && !haveActiveCard) {
    sounds.chuva.play()
    return
  }

  sounds.chuva.pause()
}

export function cafeteria() {
  if(state.isMusicOn && !haveActiveCard) {
    sounds.cafeteria.play()
    return
  }

  sounds.cafeteria.pause()
}

export function lareira() {
  if(state.isMusicOn && !haveActiveCard) {
    sounds.lareira.play()
    return
  }

  sounds.lareira.pause()
}