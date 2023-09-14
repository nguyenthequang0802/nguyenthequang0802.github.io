<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kiểm tra Tuổi</title>
</head>
<body>
    <h1>Độ tuổi đăng ký</h1>
    <?php
    function checkAge($age){
        if ($age >= 18){
            echo "Bạn đủ tuổi để đăng ký";
        } else{
            echo "Bạn chưa đủ tuổi để đăng ký";
        }
    }

    $age = 20;
    checkAge($age);
    ?>
</body>
</html>