// $('.card-tab [data-toggle="tab"]').on('shown.bs.tab', function (e) {
//   const elm = $(this)
//   const target = elm.attr("href")
//   const parentTabHeader = elm.parents(".card-header")
//   const bgTab = parentTabHeader.find(".tab-background")

//   const targetElm = $(`${target}.tab-pane`)
//   const parent = targetElm.parent()
//   const targetIndex = targetElm.index()

//   bgTab.css("transform", `translate(${targetIndex}00%, 0)`)

//   const targetElmRect = targetElm.get(0).getBoundingClientRect()

//   targetElm.siblings().each(function() {
//     const nElm = $(this)
//     const nIndex = nElm.index()
//     if(targetIndex < nIndex) {
//       nElm.removeClass("left").addClass("right")
//     } else if(targetIndex > nIndex) {
//       nElm.removeClass("right").addClass("left")
//     } else {
//       nElm.removeClass("left").removeClass("right")
//     }
//   })

//   parent.css({ height: targetElmRect.height })
// })

// /* Resize Window */
// $(window).resize(function() {
//   $('.tab-pane.active').each(function() {
//     const targetElm = $(this)
//     const parent = targetElm.parent()
//     const targetIndex = targetElm.index()
//     const targetElmRect = targetElm.get(0).getBoundingClientRect()

//     targetElm.siblings().each(function() {
//       const nElm = $(this)
//       const nIndex = nElm.index()
//       if(targetIndex < nIndex) {
//         nElm.removeClass("left").addClass("right")
//       } else if(targetIndex > nIndex) {
//         nElm.removeClass("right").addClass("left")
//       } else {
//         nElm.removeClass("left").removeClass("right")
//       }
//     })

//     parent.css({ height: targetElmRect.height })
//   })
// })

// $(document).ready(function() {
//   $('.tab-content .active').each(function() {
//     const elm = $(this)
//     const targetIndex = elm.index()

//     elm.siblings().each(function() {
//       const nElm = $(this)
//       const nIndex = nElm.index()
//       if(targetIndex < nIndex) {
//         nElm.removeClass("left").addClass("right")
//       } else if(targetIndex > nIndex) {
//         nElm.removeClass("right").addClass("left")
//       } else {
//         nElm.removeClass("left").removeClass("right")
//       }
//     });
//   })

//   $(".card-header").perfectScrollbar({
//     suppressScrollY: true
//   });
// })