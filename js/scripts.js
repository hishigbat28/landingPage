;(function () {
  'use strict'

  // eslint-disable-next-line no-undef
  AOS.init()

  console.log('hello world')
  var link = document.querySelectorAll('.nav-link')
  if (link) {
    link.forEach(function (item) {
      item.addEventListener('click', function (e) {
        console.log(e.currentTarget)
      })
    })
  }
})()

// Menu
var menuToggle = document.querySelector('.menu-button')
if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    if (!document.body.classList.contains('show-mobile-menu')) {
      document.body.classList.add('show-mobile-menu')
    } else {
      document.body.classList.remove('show-mobile-menu')
    }
  })  
}
