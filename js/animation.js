$('.active-choice').hover({
  function () {
    $(this).append($('<span>***</span>'))
  }
})

$('.active-choice.fade').hover(
  function () {
    console.log('bacon everywhere')
    $(this).fadeOut(100)
    $(this).fadeIn(500)
  }
)
