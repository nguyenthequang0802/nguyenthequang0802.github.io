<?php
function sumSquareOfEvenNumbers($arr) {
    // Viết code
    $evenNumbers = array_filter($arr, function ($value) {
        return $value % 2 == 0;
    });

    $sum = 0;
    array_map(function ($num) use (&$sum) {
         $sum += $num ** 2;
    }, $evenNumbers);
    return $sum;
}
// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = sumSquareOfEvenNumbers($input);
echo $result; // Kết quả: 56
