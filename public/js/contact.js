$(function() {

  $( '#contactForm' ).submit(function( event ) {
    event.preventDefault();

    var $form = $( this ), url = $form.attr( "action" );

    var postData = {
      name:    $form.find( "input[name='name']" ).val(),
      email:   $form.find( "input[name='email']" ).val(),
      message: $form.find( "textarea[name='message']" ).val()
    };

    if (!postData.name || !postData.email || !postData.message) {
      alert( "Please fill all fields." );
      return false;
    }

    var posting = $.post( url, postData );

    posting.done(function( data ) {

      $form.find( "textarea[name='message']" ).val( '' );

      alert( "Your message was sent successfully." );
    });
  });

  $( "button[type='submit']", '#contactForm').removeAttr('disabled');

});
