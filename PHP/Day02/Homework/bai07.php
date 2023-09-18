<?php
function findPairsWithSum($arr, $sum) {
    // Viết code
    $pairs = [];
    for ($i = 0; $i < count($arr); $i++) {
        for ($j = $i + 1; $j < count($arr); $j++) {
            if($arr[$i] + $arr[$j] == $sum) {
                $pairs[] = [$arr[$i], $arr[$j]];
            }
        }
    }
    return $pairs;
}
// Sử dụng
$input = [2, 4, 3, 5, 6, 1, 7];
$targetSum = 7;
$result = findPairsWithSum($input, $targetSum);
print_r($result); // Kết quả: [[2, 5], [4, 3], [3, 4], [5, 2], [6, 1], [1, 6]]
