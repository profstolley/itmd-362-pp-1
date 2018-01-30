$('#user').on('submit', function(e) {
  $(this).remove();
  $('#primary').append('<p class="success">Thank you. Your information has been saved.</p>');
  e.preventDefault();
});
