<?php
function findMostFrequentElement($arr) {
    // Viết code
    $maxCount = 0;
    $mostFrequentElement = null;

    for ($i = 0; $i < count($arr); $i++) {
        $count = 0;
        for ($j = 0; $j < count($arr); $j++) {
            if ($arr[$i] == $arr[$j]) {
                $count++;
            }
        }
        if($count > $maxCount) {
            $maxCount = $count;
            $mostFrequentElement = $arr[$i];
        }
    }
    return $mostFrequentElement;
}
// Sử dụng
$input = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
$result = findMostFrequentElement($input);
echo $result; // Kết quả: 4
