<?php
function sumArray($arr) {
    // Viết code
    return array_reduce($arr, function ($previous, $current) {
        return $previous + $current;
    });
}
// Sử dụng
$input = [1, 2, 3, 4, 5];
$result = sumArray($input);
echo $result; // Kết quả: 15