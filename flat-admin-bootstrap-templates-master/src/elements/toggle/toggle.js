$('[data-toggle="toggle"]').bind("click", function() {
  const elm = $(this)
  const target = elm.attr("data-target")
  const targetElm = $(target)

  targetElm.toggleClass("active")
})