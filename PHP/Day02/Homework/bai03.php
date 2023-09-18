<?php
function removeDuplicates($arr) {
    // Viết code
    $newArr = [];

    for ($i = 0; $i < count($arr); $i++){
        $isDuplicate = false;
        for ($j = 0; $j < $i; $j++) {
            if ($arr[$i] ===  $arr[$j]) {
                $isDuplicate = true;
                break;
            }
        }

        if (!$isDuplicate){
            $newArr[] = $arr[$i];
        }
    }
    return $newArr;
}
// Sử dụng
$input = [1, 2, 2, 3, 4, 4, 5];
$result = removeDuplicates($input);
print_r($result); // Kết quả: [1, 2, 3, 4, 5]