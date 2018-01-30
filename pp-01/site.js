$('#user').on('submit', function(e) {
  $(this).remove();
  $('#primary').append('<p class="success">Thank you. Your information has been saved.</p>');
  e.preventDefault();
});

function is_probably_phone(phone) {

}

function is_probably_email(email) {

}

function is_eighteen(birthday) {

}
