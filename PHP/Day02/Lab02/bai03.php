<?php
function filterEvenNumbers($arr) {
    // Viết code
    return array_filter($arr, function ($num) {
       return $num % 2 === 0;
    });
}
// Sử dụng
$input = [1, 2, 3, 4, 5, 6];
$result = filterEvenNumbers($input);
print_r($result); // Kết quả: [2, 4, 6]
