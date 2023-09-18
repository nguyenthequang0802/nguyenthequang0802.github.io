<?php
    function reverseString($str) {
        // Viết code
        $str = trim($str);
        $str = preg_replace('/\s+/', ' ', $str);
        $newStr = '';
        for ($i = strlen($str) - 1; $i >= 0; $i--){
            $newStr .= $str[$i];
        }
        return $newStr;
    }
    // Sử dụng
    $input = "Hello World";
    $result = reverseString($input);
    echo $result; // Kết quả: "dlroW olleH"