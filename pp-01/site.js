(function($){
  $('#user').on('submit', function(e) {
    if(!is_probably_phone($('#phone').val())) {
      $('label[for="phone"]').text('Check your phone number:').addClass('warn');
    }
    else if(!is_probably_email($('#email').val())) {
      $('label[for="email"]').text('Check your email address:').addClass('warn');
    }
    else if(!is_eighteen($('#birthday').val())) {
      $('label[for="birthday"]').text('Check your birthday. You must be 18:').addClass('warn');
    }
    else {
      console.log($('#phone').val(), $('#email').val(), $('#birthday').val());
      $(this).remove();
      $('#primary').append('<p class="success">Thank you. Your information has been saved.</p>');
    }
    e.preventDefault();
  });

  function is_probably_phone(phone) {
    var result = false;
    var cleaned;

    if (phone.length > 0) {
      cleaned = phone.match(/\d+/g).join('');
      if(cleaned.length >= 10) {
        result = true;
      }
    }

    return result;
  }

  function is_probably_email(email) {
    var result = false;

    if (email.length > 0) {
      if ((/^[^\s@]+@[^\s@]+$/).test(email)) {
        result = true;
      }
    }

    return result;
  }

  function is_eighteen(birthday) {
    var result = false;
    var birth, now;

    if (birthday.length > 0) {
      birth = {
        raw: birthday.split('-')
      };
      now = {
        raw: new Date()
      };

      birth.year = Number(birth.raw[0]);
      birth.date = Number(birth.raw[1] + birth.raw[2]);

      now.year = now.raw.getFullYear();
      now.day = now.raw.getDate();
      now.month = now.raw.getMonth() + 1;

      now.date = Number(now.month.toString() + now.day.toString());

      if(now.year - birth.year > 18) {
        result = true;
      }
      if((now.year - birth.year === 18) && (now.date >= birth.date)) {
        result = true;
      }
    }

    return result;
  }
})(jQuery);
