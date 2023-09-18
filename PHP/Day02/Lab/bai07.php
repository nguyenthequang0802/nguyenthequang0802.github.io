<?php
function factorial($n) {
    // Viết code ở đây
    $sum = 1;
    for($i = 1; $i <= $n; $i++){
        $sum = $sum * $i;
    }
    return $sum;
}

// Gọi hàm để kiểm tra kết quả
$number = 5;
$result = factorial($number);
echo "Giai thừa của " . $number . " là: " . $result;