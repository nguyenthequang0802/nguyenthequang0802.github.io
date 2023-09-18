<?php
function isAscendingArray($arr) {
    // Viết code
    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] < $arr[$i - 1]) {
            return false;
        }
    }
    return true;
}
// Sử dụng
$input = [1, 3, 5, 7, 9];
$result = isAscendingArray($input);
var_dump($result); // Kết quả: true
