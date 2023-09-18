<?php
function multiplyByTwo($arr) {
    // Viết code
    function sum($array) {
        return $array * 2;
    }
    return array_map(sum, $arr);
}
// Sử dụng
$input = [1, 2, 3, 4, 5];
$result = multiplyByTwo($input);
print_r($result); // Kết quả: [2, 4, 6, 8, 10]
