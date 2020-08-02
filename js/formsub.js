var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzzNbrK9Ey-C9EveshaNynvGztZCINx0b0fotLJHpSTacxBwFw4/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})