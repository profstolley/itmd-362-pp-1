$('#user').on('submit', function(e) {
  $(this).remove();
  $('#primary').append('<p class="success">Thank you. Your information has been saved.</p>');
  e.preventDefault();
});

function is_probably_phone(phone) {
  var result = false; // assume the worst :)
  // strip the phone string down to digits
  // First, do a global match for any digit characters,
  // which come back as an array.
  // Next, join the array into a single string by passing
  // an empty string, '', to the .join() method.
  // This is super nice to users, because they can put in
  // hyphens, surround the area code with a parentheses,
  // or even do the international +1 and all our script
  // will do is make sure there are ten digits in there
  // SOMEWHERE.
  var cleaned = phone.match(/\d+/g).join('');
  // Then, just test the length of the string of digits,
  // which should be at least 10 for a US number:
  // 123-456-7890
  if(cleaned.length() >= 10) {
    result = true;
  }
  return result;
}

function is_probably_email(email) {

}

function is_eighteen(birthday) {

}
