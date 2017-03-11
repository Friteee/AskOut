$(document).click(function(event) { 
  if(!$(event.target).closest('.btn-floating').length) {
    if($('.btn-floating .toggle-content').is(":visible")) {
        $('.btn-floating').toggleClass("active");
    }
  }        
})