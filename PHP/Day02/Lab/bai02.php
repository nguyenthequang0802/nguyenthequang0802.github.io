<?php
function isPrimeNumber($num) {
    if ($num < 2){
        return false;
    }
    for ($i = 2; $i < sqrt($num); $i++) {
        if ($num % $i == 0) {
            return false;
        }
    }
    return true;
}

// Gọi hàm để kiểm tra kết quả
$number = 17;
if (isPrimeNumber($number)) {
    echo $number . " là số nguyên tố.";
} else {
    echo $number . " không là số nguyên tố.";
}