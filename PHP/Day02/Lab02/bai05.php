<?php
function sumOddNumbers($arr) {
    // Viết code
    $oddNumbers = array_filter($arr, function ($num) {
        return $num % 2 != 0;
    });

    return array_reduce($oddNumbers, function ($previous, $current) {
        return $previous + $current;
    }, 0);
}
// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = sumOddNumbers($input);
echo $result; // Kết quả: 9