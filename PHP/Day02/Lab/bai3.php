<?php
function findMaxValue($arr) {
    $max = $arr[0];
    for($i = 0; $i < count($arr); $i++){
        if($max < $arr[$i]){
            $max = $arr[$i];
        }
    }
    return $max;
}
// Gọi hàm để kiểm tra kết quả
$array = [10, 5, 8, 20, 3];
$result = findMaxValue($array);
echo "Giá trị lớn nhất trong mảng là: " . $result;