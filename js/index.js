import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import { elements } from "./elements.js"

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} = elements

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

Events({controls, timer, sound})