<?php
function sumArray($arr) {
    $sum = 0;
    for($i = 0; $i < count($arr); $i++){
        $sum += $arr[$i];
    }
    return $sum;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 5];
$result = sumArray($array);
echo "Tổng các phần tử trong mảng là: " . $result;