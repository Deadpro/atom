$('input#name-submit').on('onclick', function() {
  var name = $('input#name').val();
  if ($.trim(name) != '') {
    $post('ajax/login.php', {name: name}, function(data) {
      $('div#name-data').text(data);
    });
  }
});
