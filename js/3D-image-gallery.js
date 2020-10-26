/* Pause/resume spin on 'space bar' */
const css = document.querySelector('.box').style
document.onkeypress = e => {
   if (e.keyCode !== 32) return

   css.animationPlayState = (css.animationPlayState !== 'paused')
      ? 'paused'
      : 'running'
}
