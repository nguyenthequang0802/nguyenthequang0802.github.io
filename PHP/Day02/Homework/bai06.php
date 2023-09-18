<?php
function findSecondLargest($arr) {
    // Viết code
    for ($i = 0; $i < count($arr); $i++){
        for ($j = 0; $j <count($arr)-$i-1; $j++){
            if($arr[$j] < $arr[$j+1]){
                $temp = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $temp;
            }
        }
    }
    return $arr[1];
}
// Sử dụng
$input = [5, 2, 9, 1, 7, 3];
$result = findSecondLargest($input);
echo $result; // Kết quả: 7
