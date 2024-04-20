import * as elements from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as events from './events.js'

export function start(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()

  events.registerButtons()
  events.selectOnly1Card()
  events.editMinutesAndSeconds()
  events.setMinutesAndSeconds()
}