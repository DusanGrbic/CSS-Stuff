const bg = document.getElementById('bg')
const moon = document.getElementById('moon')
const mountain = document.getElementById('mountain')
const road = document.getElementById('road')
const section = document.querySelector('section')

const distance = 200

window.addEventListener('scroll', e => {
   const scroll = scrollY

   bg.style.top = scroll * 0.4 + 'px'
   moon.style.left = -scroll + 'px'
   mountain.style.top = -scroll * 0.2 + distance + 'px'
   road.style.top = scroll * 0.2 + distance + 'px'
   text.style.top = scroll * 0.7 + distance + 'px'

   const move = scroll * 0.2 + 'px'
   section.style.setProperty('--move', move)


   console.log('Road: ', getComputedStyle(road).top)
   console.log('Section: ', getComputedStyle(section).bottom)
})