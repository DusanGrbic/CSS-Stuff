document.addEventListener('DOMContentLoaded', () => {
   function animateSVG(id, delay, delayInc) {
      const logo = document.getElementById(id)
      const logoPaths = document.querySelectorAll(`#${id} path`)

      for (let i = 0; i < logoPaths.length; i++) {
         const el = logoPaths[i]
         el.style.strokeDasharray = el.getTotalLength()
         el.style.strokeDashoffset = el.getTotalLength()
         el.style.animation = `line-anim 2s ease forwards ${delay}s`
         delay += delayInc
      }

      logo.style.animation = `fill 1s ease forwards ${delay + 2 - delayInc}s`
   }

   animateSVG('svgGroup', 0, 0.4)
})