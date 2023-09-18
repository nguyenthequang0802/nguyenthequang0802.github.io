<?php
function reverseArray($arr) {
    // Viết code ở đây
    $arr_reverse = [];
    for($i = count($arr)-1; $i >0; $i--){
        $arr_reverse[] = $arr[$i];
    }
    return$arr_reverse;
}

// Gọi hàm để kiểm tra kết quả
$array = [1, 2, 3, 4, 5];
$result = reverseArray($array);
echo "Mảng sau khi đảo ngược là: ";
print_r($result);