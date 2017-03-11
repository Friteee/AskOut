import $ from 'jquery';

let timeout = null

$(".app-login form").on("submit", (e) => {
  e.preventDefault();

  $(".app-login .app-container").addClass("__loading")

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    $(".app-login .app-container").removeClass("__loading")
  }, 3000)
});