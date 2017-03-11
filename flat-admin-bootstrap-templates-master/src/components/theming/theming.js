$('input[name=theming]').on('change', function() {
  $(".app").removeClass("app-blue-sky")
          .removeClass("app-yellow")
          .removeClass("app-red")
          .removeClass("app-green")
          .removeClass("app-default")
          .addClass("app-" + $(this).val())
});