import Timer from "./timer.js"

import {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonMore,
    buttonLess,
} from "./elements.js";

const timer = Timer({minutesDisplay, secondsDisplay})

buttonPlay.addEventListener('click', function() {
    timer.countDown()  
  })