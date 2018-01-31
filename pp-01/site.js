$('#user').on('submit', function(e) {
  if(is_probably_phone($('#phone').val())) {
    console.log("Phone looks good");
  }
  if(is_probably_email($('#email').val())) {
    console.log("Email looks good");
  }
  if(is_eighteen($('#birthday').val())) {
    console.log("They're eighteen years old");
  }
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
  if(cleaned.length >= 10) {
    result = true;
  }
  return result;
}

function is_probably_email(email) {
  var result = false; // assume the worst
  // Check to make sure there are no whitespace characters, which
  // are about all that's NOT allowed in an email address, and
  // also ensure that there's not another @ after the first one.
  if ((/^[^\s@]+@[^\s@]+$/).test(email)) {
    result = true;
  }
  return result;
}

function is_eighteen(birthday) {
  var result = false; // assume the worst

  // remember that birthday is returned by the form as a string, in ISO-date format:
  // YYYY-MM-DD - NOT in the localized format displayed in browsers that understand
  // type="date", which in the US is mm/dd/yyyy

  // create an object to hold the birthday date components
  var birth = {
    raw: birthday.split('-') // get an array of number strings, split at the hyphen [YYYY,MM,DD]
  };

  // create a similar object to hold today's date components
  var now = {
    raw: new Date()
  };

  // Build the birthday data
  // Use the Number() constructor to be sure we're working on numbers below;
  // The split() method makes an array of strings
  birth.year = Number(birth.raw[0]);
  birth.date = Number(birth.raw[1] + birth.raw[2]); // they're still strings, so this will concatenate

  // Build today's data
  now.year = now.raw.getFullYear(); // no need for number conversation, as Date objects return them
  now.day = now.raw.getDate();
  now.month = now.raw.getMonth() + 1; // getMonth returns 0 thru 11!
  // This is a little trickier; we want to concatenate the month and day,
  // but then turn the concatenated version into a number to compare below:
  now.date = Number(now.month.toString() + now.day.toString());

  // Now let's get on with the main monkey business
  if(now.year - birth.year > 18) {
    result = true; // they're 19 or older, just by the year; we can stop
  }
  if((now.year - birth.year === 18) && (now.date >= birth.date)) {
    result = true; // birth year was 18 years ago, AND they've had a birthday, even if it's today
  }

  return result;
}
