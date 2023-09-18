<?php
function sumDivisibleBy3Or5($arr) {
    // Viết code ở đây
    $sum = 0;
    for ($i = 0; $i < count($arr); $i++){
        if($arr[$i] % 3 == 0 || $arr[$i] % 5 == 0) {
            $sum += $arr[$i];
        }
    }
    return $sum;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
$result = sumDivisibleBy3Or5($array);
echo "Tổng các số chia hết cho 3 hoặc 5 trong mảng là: " . $result;