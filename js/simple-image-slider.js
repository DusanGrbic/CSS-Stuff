const slides = document.querySelectorAll('.slide')
let index = 0

function showSlide(n) {
   slides.forEach(s => s.style.display = 'none');
   slides[n].style.display = 'block'
   highlightCurrentSlide(n)
}

function highlightCurrentSlide(n) {
   const navImages = document.querySelectorAll('.nav li img')
   navImages.forEach(img => img.style.border = '4px solid #fff');
   navImages[n].style.border = '4px solid yellow'
}

function currentSlide(n) {
   index = n
   showSlide(n)
}

function nextSlide(n) {
   index += n

   if (index < 0) index = slides.length - 1
   if (index > slides.length - 1) index = 0

   showSlide(index)
}

showSlide(0)