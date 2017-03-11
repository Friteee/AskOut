
$(document).ready(function() {
  $('#submit').click(login);
});

function login(event) {
  var ref = $("").find("[required]");
  // cehck if all required fields are non empty
  $(ref).each(function () {
    if ($(this).val() === '') {
      alert("Required field should not be blank.");
      $(this).focus();
      event.preventDefault();
      return false;
    }
  });

  // create the request to server
  $.ajax({
    url: "php/login.php",
    type: 'POST',
    data: formToDict('#login-form')
  }).done(function (response) {
    if (response == 'success') {
      window.location.replace('dashboard.html');
    } else {
      alert(response);
    }
  });
  event.preventDefault();
}

function formToDict(form) {
  var dict = {};
  $(form).find(':input[name]:enabled').each(function () {
    var self = $(this);
    var name = self.attr('name');
    if (dict[name]) {
      dict[name] = dict[name] + ',' + self.val();
    } else {
      dict[name] = self.val();
    }
  });
  return dict;
}

function formToJSON(form) {
  return JSON.stringify(formToDict(form, ':input[name]:enabled'));
}
