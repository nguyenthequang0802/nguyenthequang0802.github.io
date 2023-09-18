<?php
function findKthLargest($arr, $k) {
    // Viết code ở đây

    for ($i = 0; $i < count($arr); $i++){
        for ($j = 0; $j <count($arr)-$i-1; $j++){
            if($arr[$j] < $arr[$j+1]){
                $temp = $arr[$j];
                $arr[$j] = $arr[$j+1];
                $arr[$j+1] = $temp;
            }
        }
    }
    if($k <= count($arr)){
        return $arr[$k-1];
    }
}

// Gọi hàm để kiểm tra kết quả
$array = [10, 5, 8, 20, 3];
$k = 2;
$result = findKthLargest($array, $k);
echo "Phần tử lớn thứ " . $k . " trong mảng là: " . $result;