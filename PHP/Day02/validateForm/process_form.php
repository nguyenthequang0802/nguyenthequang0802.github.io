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
    function validateEmail($email) {

        $email = preg_replace('/\s+/', ' ', $email);
        if (empty(trim($email))) {
            echo 'Email không được để trống <br>';
        } else {
            if (preg_match("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", $email, $matches)) {
//                echo 'Email không đúng định dạng <br>';
                if (count($matches) == 0) {
                    echo "Email không đúng định dạng <br>";
                } else {
                    echo "Email nhậpg đúng <br>";
                }
            }
        }
    }
    // Hàm validate name
    // Viết code ở đây
    function validateName($name) {
        $name = preg_replace('/\s+/', ' ', trim($name));

        if (empty(trim($name))) {
            echo 'Tên không được để trống';
        } else {
            if (preg_match("/^[a-z_-]{2,16}$/", $name, $matches)) {
//                echo 'Tên không đúng định dạng';
                if (count($matches) == 0) {
                    echo "Tên không đúng định dạng <br>";
                } else {
                    echo "Tên nhập đúng";
                }
            }
        }
    }
    validateEmail($email);
    validateName($name);
    ?>
</body>
</html>
