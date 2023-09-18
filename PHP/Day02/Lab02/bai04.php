<?php
function multiplyEvenNumbers($arr) {
    // Viết code
    $evenNumbers = array_filter($arr, function ($value) {
        return $value % 2 == 0;
    });

    function sum($array) {

    }

    return array_map(function ($num) {
        return $num * 2;
    }, $evenNumbers);
}
// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = multiplyEvenNumbers($input);
print_r($result); // Kết quả: [4, 8, 12]
