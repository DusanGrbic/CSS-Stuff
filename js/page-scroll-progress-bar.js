$(document).ready(function () {

   const pbc = document.querySelector('.progressbar-container')
   const pb = document.querySelector('.progressbar')
   const duration = 200
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
   pbc.onclick = e => $('html, body').animate({
      scrollTop: e.offsetY / wh * sh
   }, duration)

})