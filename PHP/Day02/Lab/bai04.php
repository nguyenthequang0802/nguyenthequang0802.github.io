<?php
function countOccurrences($arr, $value) {
    // Viết code ở đây
    $count = 0;
    for($i = 0; $i < count($arr); $i++){
        if($arr[$i] == $value) {
            $count += 1;
        }
    }
    return $count;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 2, 5, 2];
$valueToFind = 2;
$result = countOccurrences($array, $valueToFind);
echo "Số lần xuất hiện của " . $valueToFind . " trong mảng là: " . $result;