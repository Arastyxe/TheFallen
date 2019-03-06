var requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
})()

  var layer1 = document.querySelector('.layer-1')
  var layer2 = document.querySelector('.layer-2')
  var layer3 = document.querySelector('.layer-3')
  var layer4 = document.querySelector('.layer-4')
  var heroText = document.querySelector('.hero-text')
  var scrollContactHero = function scrollContactHero() {
    layer1.style.transform = 'translateY(' + window.pageYOffset * 0.5 + 'px)'
    layer2.style.transform = 'translateY(' + window.pageYOffset * .25 + 'px)'
    layer3.style.transform = 'translateY(' + window.pageYOffset * 1.5 + 'px)'  
    layer4.style.transform = 'translateY(' + window.pageYOffset * 2 + 'px)'  
	heroText.style.opacity = 1 - window.pageYOffset * 0.01 + ''
    requestAnimFrame(scrollContactHero);
  }
  requestAnimFrame(scrollContactHero)
