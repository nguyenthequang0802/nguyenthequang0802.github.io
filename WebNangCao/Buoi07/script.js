$('#email').on('keyup', function(){
    var email = $(this).val();
    console.log(email);
});

$('#password').on('keyup', function(){
    var password = $(this).val();
});

$('.login').on('click', function(){
    // alert($('#email').val(), $('#password').val());
    $('.content_footer').html('Login success');
    $('.content_footer').append('<div class="footer">Div Append</div>');
    $('.content_footer').addClass('error');
})