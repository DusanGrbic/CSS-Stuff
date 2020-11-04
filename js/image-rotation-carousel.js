const carousel = document.querySelector('.carousel')

let yRotation = 0
let xRotation
let perspective

function rotate(n) {
   const w = window.innerWidth

   /* Determine perspective value based on viewport width */
   perspective = (w > 940 || w <= 440) ? 1000 : 1500

   /* Determine X-axis rotation based on viewport width */
   switch (true) {
      case (w <= 440):
         xRotation = -30
         break;
      case (w <= 940):
         xRotation = -10
         break;
      default:
         xRotation = 0
         break;
   }
   
   // Increase/decrease Y-axis rotation by 45deg
   yRotation += n

   carousel.style.transform = `
      perspective(${perspective}px) 
      rotateX(${xRotation}deg)
      rotateY(${yRotation}deg)
   `
}

window.onresize = rotate.bind(this, 0)

// Rotate on left/right arrow key
document.onkeydown = e => {
   // Left arrow
   if (e.keyCode === 37) rotate(-45)
   // Right arrow
   else if (e.keyCode === 39) rotate(45)
}

