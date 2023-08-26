$('#btn-login').on('click', function(){
    let email = $('#email').val();
    let password = $('#password').val();
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    
    if(email.length === 0 || password.length === 0){
        swal("Thất Bại!", "Vui lòng nhập thông tin email và mật khẩu của bạn!", "error");
    }else if(!regex.test(email.trim())){
        swal("Thất Bại!", "Vui lòng nhập đúng định dạng email!", "error");
    } else if(password.length < 6){
        swal("Thất Bại!", "Mật khẩu của bạn phải có độ dài lớn hơn 6 kí tự!", "error");
    } else{
        let dataUser = JSON.parse(localStorage.getItem('accounts')) || [];
        let findUser = dataUser.find(user => user.email === email.trim() && user.password === password)

        if(findUser){
            var userLogin = {
                email: email,
                password : password,
            }

            localStorage.setItem('isLogin', JSON.stringify(userLogin));

            swal({
                title: "Thành Công!",
                text: "Đăng nhập thành công!",
                icon: "success",
                button: "Về trang chủ",
            }) 
            .then(() => {
                window.location.href = '../index.html';
            });
        } else{
            swal("Thất Bại!", "Vui lòng kiểm tra lại email và mật khẩu!", "error");
        }
    }   
});

$('.show-pw').on('click', function(){
    let passwordInput = $('#password'); // Get the password input element
    let password = passwordInput.val(); // Get the password value

    if(password !== ''){
        if(passwordInput.attr('type') === 'password'){
            passwordInput.attr('type', 'text');
            $('.show-pw>i').removeClass('fa-eye');
            $('.show-pw>i').addClass('fa-eye-slash');
        } else{
            passwordInput.attr('type', 'password');
            $('.show-pw>i').removeClass('fa-eye-slash');
            $('.show-pw>i').addClass('fa-eye');
        }
    }
});