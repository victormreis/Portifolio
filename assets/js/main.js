const arrow = document.querySelector('#arrowUp')

function backToTop() {
  if (window.scrollY >= 400) {
    arrow.classList.add('show')
  } else {
    arrow.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  
  backToTop()
  
})


