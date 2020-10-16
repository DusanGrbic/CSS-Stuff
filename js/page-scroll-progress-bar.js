const pbc = document.querySelector('.progressbar-container')
const pb = document.querySelector('.progressbar')
const scrollDuration = 200
/* dh - document height; wh - window height; sh - scroll height (total height - viewport) */
let dh, wh, sh

// On load and resize determine the heights
['load', 'resize'].forEach(e => window.addEventListener(e, e => {
   dh = document.body.clientHeight
   wh = window.innerHeight
   sh = dh - wh
}))

// On scroll adjust progressbar height
window.onscroll = e => pb.style.height = 100 / sh * pageYOffset + '%'

// Smooth scroll the page (progressbar height is automatically adjusted because of window.onscroll listener)
pbc.onclick = e => {
   const scrollPercent = 100 / wh * e.offsetY
   const scroll = sh / 100 * scrollPercent
   smoothScroll(scroll, scrollDuration)
}

function smoothScroll(target, duration) {
   let t0 = null
   // starting scroll point
   const startPosition = pageYOffset
   // difference between ending and starting scroll point
   const distance = target - startPosition

   function animation(t) {
      // set t0 to timestamp value when animation started
      if (t0 === null) t0 = t

      // Time elapsed since the begining of the animation
      const timeElapsed = t - t0
      const run = ease(timeElapsed, startPosition, distance, duration)

      scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
   }
   requestAnimationFrame(animation)


   function ease(t, b, c, d) {
      /**
       * t - current time
       * b - start value
       * c - change in value
       * d - duration
       */
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
   };
}

