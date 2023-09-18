<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Form Submission Result</title>
</head>
<body>
    <h2>Form Submission Result</h2>
    <?php
    // Lấy dữ liệu từ form
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Hàm validate email
    // Viết code ở đây
    $errors = [];
    function validateName($email) {
        if (empty(trim($email))) {
            $errors['email']['required'] =  'Email không được để trống';
        } else {
            if
        }
    }
    // Hàm validate name
    // Viết code ở đây
    ?>
</body>
</html>
