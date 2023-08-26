$('#btn-signup').on('click', function(){
    let email = $('#email').val();
    let password = $('#password').val();
    let confirmpassword = $('#confirm_password').val();
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    var users = JSON.parse(localStorage.getItem('accounts')) || [];
    let oldEmail = users.find(user => user.email === email);

    var newUser = {
        email: email,
        password: password,
    };

    if (email.length === 0 || password.length === 0 || confirmpassword.length === 0) {
        swal("Thất Bại!", "Vui lòng nhập đầy đủ thông tin của bạn!", "error");
    }else if (!regex.test(email.trim())) {
        swal("Thất Bại!", "Vui lòng nhập đúng định dạng email!", "error");
    } else if (password.length < 6) {
        swal("Thất Bại!", "Mật khẩu của bạn phải có độ dài lớn hơn 6 kí tự!", "error");
    } else if (confirmpassword.trim() !== password.trim()) {
        console.log(confirmpassword);
        swal("Thất Bại!", "Mật khẩu của bạn không trùng khớp!", "error");
    } else if (oldEmail) {
        swal("Thất Bại!", "Email đã tồn tại!", "error");
    } else {
        users.push(newUser);
        localStorage.setItem('accounts', JSON.stringify(users));
        swal ({
            title: "Thành Công!",
            text: "Đăng ký thành công!",
            icon: "success",
            button: "Đăng nhập",
        }) 
        .then ( () => {
            window.location.href = '../pages/login.htmThất Bại';
        });
    }
});

$('.show-pw').on('click', function() {
    let passwordInput = $('#password'); // Get the password input element
    let confirmpassword = $('#confirm_password');
    let password = passwordInput.val(); // Get the password value

    if(password !== ''){
        if(passwordInput.attr('type') === 'password'){
            passwordInput.attr('type', 'text');
            confirmpassword.attr('type', 'text');
            $('.show-pw>i').removeClass('fa-eye');
            $('.show-pw>i').addClass('fa-eye-slash');
        } else{
            passwordInput.attr('type', 'password');
            confirmpassword.attr('type', 'password');
            $('.show-pw>i').removeClass('fa-eye-slash');
            $('.show-pw>i').addClass('fa-eye');
        }
    }
});

