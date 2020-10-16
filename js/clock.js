const 
   hour = document.querySelector('.hour'),
   sec = document.querySelector('.sec'),
   min = document.querySelector('.min')

setInterval(() => {
   const 
      time = new Date,
      hh = (360 / 12 * time.getHours() + (30 / 60 * time.getMinutes())),
      mm = 360 / 60 * time.getMinutes(),
      ss = 360 / 60 * time.getSeconds()

   hour.style.transform = `rotate(${hh}deg)`
   min.style.transform = `rotate(${mm}deg)`
   sec.style.transform = `rotate(${ss}deg)`
   
}, 1000);

document.querySelector('.toggle').onclick = () => document.body.classList.toggle('light')