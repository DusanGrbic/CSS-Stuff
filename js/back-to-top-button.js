const scroll = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
   scroll.classList.toggle('active', scrollY > 500)
})

scroll.addEventListener('click', () => {
   scrollTo({
      top: 0,
      behavior: 'smooth'
   })
})